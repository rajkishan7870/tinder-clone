const {OpenAIEmbeddings} =  require("@langchain/openai");
const { FaissStore } = require("@langchain/community/vectorstores/faiss");
const { Document } =  require("@langchain/core/documents");
const dotenv = require("dotenv");
dotenv.config();

const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY,
    batchSize: 512,
    model: "text-embedding-3-large",
})

const create_Faiss_DB = async (docs) => {
    const vectorStore = await FaissStore.fromDocuments(
        docs,
        embeddings
    );
    await vectorStore.save("./Faiss_DB");
}

module.exports = {create_Faiss_DB};
