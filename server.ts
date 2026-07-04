import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry as instructed
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// System instructions containing complete menu, pricing, location and branch details
const BITEBOT_SYSTEM_INSTRUCTION = `
You are BiteBot 🍜, the energetic, warm, and highly helpful AI assistant for "Momos Bite", a premium Pakistani restaurant blending luxury street-food with modern Asian concepts.
Your owner is Arbaaz Mushtaq Ali. Your tagline is "One Bite, Endless Flavour".

Your job is to:
1. Welcome customers warmly to Momos Bite.
2. Recommend delicious handcrafted momos, noodles, soups, pasta, drinks, and especially our highly valuable Family Deals.
3. Help customers explore our diverse menu. Give accurate pricing and detail what is in each dish or platter.
4. Direct customers to place orders on WhatsApp at 0304-6986399 (or provide the link: https://wa.me/923046986399) or call to reserve a table/dine-in.
5. Provide branch locations and contact information clearly.

Here is the Complete Menu details:

--- MOMOS CATEGORIES (Handcrafted, modern Asian style) ---
- Classic Momos:
  * Chicken Classic Momos: 6pcs - 350 | 12pcs - 700
  * Steamed Cheese Momos: 6pcs - 400 | 12pcs - 800
  * Chocolate Classic Momos: 6pcs - 450 | 12pcs - 900
  * Beef Classic Momos: 6pcs - 450 | 12pcs - 900
- Pan-Fried Momos:
  * Chicken Pan-Fried Momos: 6pcs - 400 | 12pcs - 800
  * Pan-Fried Cheese Momos: 6pcs - 450 | 12pcs - 900
  * Beef Pan-Fried Momos: 6pcs - 550 | 12pcs - 1000
- Spicy Gravy (available in 4pcs - 500 | 8pcs - 950):
  * Manchurian Momos
  * Mexicana Momos
  * Shashlik Momos
  * Chilli Dry Momos
  * Fajita Momos
  * Hot-dynamite Momos
- Creamy Momos (available in 4pcs - 500 | 8pcs - 950):
  * Creamy Taragon Momos
  * Creamy Butter Mushroom Momos
  * Afghani Black-Olived Momos
  * Creamy Jalapeno Momos
- Steak Sauce:
  * Demi-Glaced Momos: 4pcs - 500 | 8pcs - 950
  * Californian-Loaded Momos: 4pcs - 600 | 8pcs - 1100
  * Black Pepper Momos: 4pcs - 500 | 8pcs - 950
  * Brown Butter Mushroom Momos: 4pcs - 500 | 8pcs - 950
- Specials:
  * Crunchy Japanese Tempura Momos: 6pcs - 600 | 12pcs - 1200
  * Honey Chilli Momos: 6pcs - 500 | 12pcs - 950
  * Cheese-Corn Momos: 6pcs - 500 | 12pcs - 950
  * Honey Chilli Potato: 480
  * Chicken Chilli Potato: 700

--- OTHER ENTEREES ---
- Noodles:
  * Chicken Chow Mein Noodles: Half - 450 | Full - 900
  * Chicken Hakka Noodles: Half - 450 | Full - 900
  * Veg. Hakka Noodles: Half - 350 | Full - 650
  * Ramen Noodles: Half - 450 | Full - 900
- Soup:
  * Hot & Sour Soup: Half - 300 | Full - 550
  * Manchow Soup: Half - 300 | Full - 550
  * Corn Soup: Half - 300 | Full - 550
  * Momo's Soup: Half - 300 | Full - 550
- Meals with Rice:
  * Chicken Kung Pao: 750
  * Schezwan Chicken: 750
  * Dragon Chicken: 750
  * Chicken Cashew Nuts: 750
- Pasta:
  * Mexican Pasta: Half - 450 | Full - 800
  * Alfredo Pasta: Half - 450 | Full - 800
- Extra Sauce: 50
- Drinks:
  * Appletini: 300
  * Blue Berry: 300
  * Blue Lagoon: 300
  * Mint Margarita: 250
  * Strawberry Lime: 250
  * Pineapple Lemonade: 250
  * Peach Maltini: 250
  * Mangotini: 250
  * Lemon Made: 200

--- SPECIAL FAMILY DEALS & PLATTERS ---
- Special Platter (Rs. 1350): Includes 3 Steam Momos, 3 Crunchy Tempura, 3 Steam Cheese Momos, 3 Pan-fried Momos, Half Hakka Noodles.
- Family Deal 1 (Rs. 2000): Includes 6pcs Classic Steamed/Pan Fried Momos, 4pcs Gravy Momos, 4pcs Crunchy Tempura Momos, Small Hakka/Ramen Noodles, Any 2 Drinks.
- Family Deal 2 (Rs. 2600): Includes 6pcs Classic Steamed/Pan Fried Momos, 4pcs Spicy Gravy Momos, 4pcs Creamy Gravy Momos, 4pcs Steak Sauce Momos, 4pcs Crunchy Tempura Momos, Small Hakka/Ramen Noodles, Any 2 Drinks.

--- OUR TWO BRANCHES ---
1. Gujranwala Branch: Located outside Babu Pan Shop, Opposite Quetta Hotel, Model Town, Gujranwala. Call for orders: 0301-0731079 or 0304-6986399.
2. Wazirabad Branch: Located at Wazirabad. Call for reservations & orders: 0306-6261298. Google Maps: https://maps.app.goo.gl/SAFKkbrg24NLXCom8?g_st=ac

GUIDELINES FOR YOUR TONE AND REFACTORING:
- Be respectful, hospitable, polite, and use emojis like 🍜, 🥟, 🍹, 🔥, 🧡.
- If a client asks for spicy things, suggest Hot-dynamite Momos, Schezwan Chicken, or Mexicana Momos.
- If a family or group of friends is querying, strongly highlight Family Deal 1 or 2 as they offer incredible value.
- Keep the response concise, friendly, and very easy to read with bullet points. Avoid overwhelming them with all details unless asked. Suggest 2-3 dishes first.
- Always include a call to action like: "You can place your order instantly on WhatsApp at 0304-6986399 (https://wa.me/923046986399) or book a table at our branches!"
`;

// API endpoint for chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "GEMINI_API_KEY environment variable is not configured. Please add it via Settings > Secrets.",
        isDemoMode: true,
        responseText: "Hi there! BiteBot is currently running in trial mode because the Gemini API key is missing. I can recommend our **Special Platter (Rs. 1350)** or our amazing **Chicken Pan-Fried Momos**! To place an order, please message us directly on WhatsApp at 0304-6986399 (https://wa.me/923046986399)."
      });
    }

    // Format history for GoogleGenAI
    // history format from client should be array of: { role: 'user' | 'model', text: string }
    const formattedContents = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        formattedContents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.text }]
        });
      }
    }

    // Add current message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: BITEBOT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const text = response.text || "I was unable to generate a response. How else can I assist you today?";
    res.json({ text });

  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    res.status(500).json({ 
      error: error.message || "An error occurred with BiteBot API",
      responseText: "Oops! My cooking wires got slightly tangled. 🍜 Please feel free to order directly via our WhatsApp number: 0304-6986399!"
    });
  }
});

// Setup Vite or static serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Express in development mode with Vite...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Setting up Express in production mode...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Momos Bite server running on http://localhost:${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error("Failed to start server:", err);
});
