const { FaissStore } = require("@langchain/community/vectorstores/faiss");
const { Document } =  require("@langchain/core/documents");
const {OpenAIEmbeddings} = require("@langchain/openai");
const {CohereEmbeddings} = require("@langchain/cohere");
const { GoogleGenerativeAIEmbeddings } = require("@langchain/google-genai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");
dotenv.config();
cohere_key = "gyAXsxxskualhYqH0CUkDwfZf7zhzZFqP4jCyguZ"

// const embeddings = new GoogleGenerativeAIEmbeddings({
//     model: "text-embedding-004",
// });

// const embeddings = new OpenAIEmbeddings(openAIApiKey = process.env.OPENAI_API_KEY)

// const embeddings = new CohereEmbeddings({
//   apiKey: "gyAXsxxskualhYqH0CUkDwfZf7zhzZFqP4jCyguZ",
//   model: "embed-english-v3.0"})

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

const create_Faiss_DB = async (docs) => {
    // const vectorStore = await FaissStore.fromDocuments(
    //     docs,
    //     embeddings
    // );
    // await vectorStore.save("Faiss_DB");

    const model = genAI.getGenerativeModel({ model: "text-embedding-004"});

    const text = "The quick brown fox jumps over the lazy dog."

    const result = await model.embedContent(text);
    const embedding = result.embedding;
    console.log(embedding.values)
}

module.exports = {create_Faiss_DB};
