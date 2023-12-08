import React from 'react'
import { Link } from 'react-router-dom'

const MainSectionGuideSinglePage = () => {
    return (
        <div className="py-5 sm:py-10 max-w-[700px] border border-red-900 mx-auto">
            <div className="prose prose-xl container prose-blockquote:font-normal prose-code:bg-transparent prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-3 prose-h3:mt-2 prose-img:mt-1">
                <p className="mb-4">Language Models (LLMs) have revolutionized the field of Natural Language Processing (NLP), enabling machines to understand and generate human-like text. In my last visual guide, we discussed <Link to="/guides/introduction-to-llms" className='underline'>what LLMs are and how they work on a high level</Link>. This guide is a curation of 5 free resources to help you further learn about LLMs and NLP. I have personally gone through these and would highly recommend these to anyone wanting to learn about LLMs.</p>
                <h2 id="nlp-course-by-huggingface" className="text-3xl mt-10 mb-3 leading-relaxed">NLP Course by HuggingFace</h2>
                <p><Link to="https://huggingface.co/learn/nlp-course/chapter1/1" rel="noopener noreferrer nofollow" target="_blank" className='underline'>huggingface.co/learn/nlp-course</Link></p>
                <p>HuggingFace, a leading NLP platform, offers an in-depth NLP course that delves into transformer models, their workings, and how to effectively utilize HuggingFace’s models. The course starts with the basics of Datasets and Tokenizers, equipping you with essential knowledge before diving into classNameic NLP tasks. What sets this course apart is its broader perspective, exploring how transformer models can be applied in speech processing and computer vision domains. By the end, you’ll have a strong foundation in using and fine-tuning models from HuggingFace.</p>
                <h2 id="prompt-engineering-by-deeplearningai" className="text-3xl mt-10 mb-3">Prompt Engineering by DeepLearning.AI</h2>
                <p><Link to="https://deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/" rel="noopener noreferrer nofollow" target="_blank" className='underline'>ChatGPT Prompt Engineering for Developers</Link></p>
                <p>Prompt engineering is a critical aspect of working with LLMs, and deeplearning.ai offers a comprehensive course focused specifically on this topic. With hands-on practice materials, you’ll gain practical knowledge and techniques for effective prompt engineering. By understanding how to craft prompts that yield desired model outputs, you’ll enhance the performance and control of LLMs in various applications. This course is a valuable resource for anyone aiming to master the art of prompt engineering.</p>
                <h2 id="llm-university-by-cohere" className="text-3xl mt-10 mb-3">LLM University by Cohere</h2>
                <p><Link to="https://docs.cohere.com/docs/llmu" rel="noopener noreferrer nofollow" target="_blank" className='underline'>llm.university</Link></p>
                <p>Cohere’s LLM University provides a diverse curriculum covering essential NLP techniques. From semantic search and generation to classNameification and embeddings, this resource offers comprehensive instruction on a wide range of topics. With a combination of theory and practical exercises, LLM University equips learners with the knowledge and skills necessary to leverage LLMs effectively. Whether you’re a beginner or an experienced practitioner, this resource will enhance your understanding and proficiency in various NLP applications.</p>
                <h2 id="llmops" className="text-3xl mt-10 mb-3">LLMOps</h2>
                <p><Link to="https://fullstackdeeplearning.com/llm-bootcamp/spring-2023/llmops/" rel="noopener noreferrer nofollow" target="_blank" className='underline'>LLMOps Course</Link></p>
                <p>LLMOps, a dedicated resource for operationalizing LLMs, offers insights into testing, evaluation metrics, deployment, monitoring, and more. This resource takes you beyond the development stage, exploring the crucial aspects of LLMOps in real-world scenarios. Learn how to effectively test LLMs, evaluate their performance, and deploy them in production environments. With an emphasis on test-driven development for LLMs, LLMOps equips you with the necessary knowledge to ensure the reliability and effectiveness of your models.</p>
                <h2 id="llm-bootcamp" className="text-3xl mt-10 mb-3">LLM Bootcamp</h2>
                <p><Link to="https://fullstackdeeplearning.com/llm-bootcamp/" rel="noopener noreferrer nofollow" target="_blank" className='underline'>Full Stack LLM Bootcamp</Link></p>
                <p>This is a course by a team of UC Berkeley PhD alumni that teaches best practices and tools for building LLM-powered apps. It covers the full stack from prompt engineering to user-centered design. They have a <Link to="https://fullstackdeeplearning.com/course/" rel="noopener noreferrer nofollow" target="_blank" className='underline'>Full Stack Deep Learning</Link> course as well if you are interested in learning that.</p>
                <p>With these 5 free resources, you have a wealth of knowledge at your fingertips to master LLMs and advance your NLP skills. We have also been working on AI related content i.e. including roadmaps and best practices on <Link to="https://roadmap.sh" target="_blank">roadmap.sh</Link> so stay tuned for that as well. Happy learning!</p>
            </div>
        </div>

    )
}

export default MainSectionGuideSinglePage