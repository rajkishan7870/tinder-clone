const { CohereClient } = require("cohere-ai");
const {FaissStore} = require("@langchain/community/vectorstores/faiss");
const {OpenAIEmbeddings} = require("@langchain/openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs')

const dotenv = require("dotenv");
dotenv.config();

embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY,
  batchSize: 512,
  model: "text-embedding-3-small",
})


const cohere = new CohereClient({
  token: "gyAXsxxskualhYqH0CUkDwfZf7zhzZFqP4jCyguZ",
});

const getGeminiEmbedding = async (docs) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
  const model = genAI.getGenerativeModel({ model: "text-embedding-004"});
  const text = docs
  const result = await model.embedContent(text);
  const embeddings = result.embedding.values
  return embeddings
};

const getCohereEmbedding = async (docs) => {
  const embed = await cohere.embed({
    texts: [docs],
    model: 'embed-english-v3.0',
    inputType: 'classification',
  });
  return embed;
};

const create_Faiss_DB = async (profileDataForFaiss, metaData) => { 
  docs = {
    text: JSON.stringify(profileDataForFaiss),
    tags: metaData
  }
  if (fs.existsSync("faiss_db")){
    const target_db = await FaissStore.load(
      "faiss_db",
      embeddings
    );
    const tempVectorStore = await FaissStore.fromDocuments(
      [{pageContent: docs.text, metadata: docs.tags}],
      embeddings
    );
    target_db.mergeFrom(tempVectorStore)
    target_db.save("faiss_db")
  }
  else{
    const vectorStore = await FaissStore.fromDocuments(
      [{pageContent: docs.text, metadata: docs.tags}],
      embeddings
    );
    vectorStore.save("faiss_db")
  }
};


const retrieveFromFaissDb = async (docs)=>{
  const local_db = await FaissStore.load(
    "faiss_db",
    embeddings
  );
  const res = await local_db.similaritySearchWithScore(docs, 10)
  console.log(res)
  return res  
}


module.exports = { create_Faiss_DB, retrieveFromFaissDb };
