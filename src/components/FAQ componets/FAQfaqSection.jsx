import React from 'react'
import { Link } from 'react-router-dom'

const FAQfaqSection = () => {
    return (
        <div className="bg-gray-50 py-7 sm:py-10">
            <div className="mx-[6.5%] md:mx-[12%]">
                <main id="main-content">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">What is roadmap.sh?</h2>
                        <p className="mb-3"> <span className="font-bold">roadmap.sh</span> contains community-curated
                            roadmaps, study plans, paths, and resources for developers. There are
                            role-based roadmaps, listing skills you should know for any given role, as
                            well as skill-based roadmaps listing items to learn for any given skill.
                        </p>
                        <p className="mb-3">
                            It started as a set of <Link to="https://github.com/kamranahmedse/developer-roadmap"
                                className="font-bold underline" target="_blank">visual charts on GitHub</Link> to guide developers who are
                            confused about what they should learn
                            next, but then expanded into interactive roadmaps where you can click
                            and get resources to learn any given resource, contribute by adding new
                            roadmaps, suggest changes to existing roadmaps, track your progress as
                            you follow a roadmap and so on.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">How are roadmaps created?</h2>
                        <p className="mb-3">
                            The project has a strong community that powers everything on the
                            website. It is <Link
                                to="https://github.com/search?o=desc&amp;q=stars%3A%3E100000&amp;s=stars&amp;type=Repositories"
                                target="_blank" className="font-bold underline">the 6th most starred opensource project on GitHub</Link> and gets
                            visited by hundreds of thousands of developers every month.
                            We also have newsletter with 150,000+ developers. All the roadmaps are
                            created and reviewed by community and several subject matter experts.
                            Also, anyone can suggest changes to any roadmap and we have a process
                            to review and approve them.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">
                            What are the plans for roadmap.sh?
                        </h2>
                        <p className="mb-3">
                            Our long-term plan is to make roadmap.sh a go-to place for
                            developers whenever they plan on learning something new. We started
                            with roadmaps, guides, videos and other visual content but we plan
                            on introducing best practices, best-practices for certain tasks, quizzes
                            to test your knowledge and prepare yourself for the interviews,
                            project ideas to work on while following the roadmaps, public
                            profiles to share your progress and interact with the other learners
                            and so on.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">How is roadmap.sh built?</h2>
                        <p className="mb-3">
                            The website is built with <Link to="https://astro.build/" className="font-bold underline" target="_blank"
                                rel="nofollow">Astro</Link> and <Link to="https://tailwindcss.com/" className="font-bold underline"
                                    target="_blank" rel="nofollow">Tailwind</Link> and is deployed to <Link to="https://pages.github.com/"
                                        className="font-bold underline" target="_blank" rel="nofollow">GitHub pages</Link>. The project is fully
                            open-source and the codebase
                            <Link to="https://github.com/kamranahmedse/developer-roadmap" className="font-bold underline" target="_blank">can
                                be found on GitHub</Link>
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">How can I add a new roadmap?</h2>
                        <p className="mb-3">
                            For new roadmaps, please open an issue with the textual description
                            of the roadmap in the form of bulleted list. Here is an <Link target="_blank" className="font-bold underline"
                                to="https://github.com/kamranahmedse/developer-roadmap/issues/1387#issue-1329276631">example
                                contribution of a new roadmap</Link>.
                        </p>
                        <p className="mb-3">
                            Find more details in the <Link
                                to="https://github.com/kamranahmedse/developer-roadmap/blob/master/contributing.md"
                                className="font-bold underline" target="_blank">contribution docs</Link>.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">
                            How can I update an existing roadmap?
                        </h2>
                        <p className="mb-3">
                            Please have a look at the <Link
                                to="https://github.com/kamranahmedse/developer-roadmap/blob/master/contributing.md"
                                className="font-bold underline" target="_blank">contribution docs</Link> for details.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">
                            How can I add content to existing roadmaps?
                        </h2>
                        <p className="mb-3">
                            Please have a look at the <Link
                                to="https://github.com/kamranahmedse/developer-roadmap/blob/master/contributing.md"
                                className="font-bold underline" target="_blank">contribution docs</Link> for details.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">
                            Can I redistribute the content?
                        </h2>
                        <p>
                            No, the license of the content on this website does not allow you to
                            redistribute any of the content on this website anywhere. You can
                            use it for personal use or share the link to the content if you have
                            to but redistribution is not allowed.
                        </p>
                    </div>
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold mb-2">
                            What is the best way to contact you?
                        </h2>
                        <p>
                            Tweet or send me a message <Link className="underline font-bold" to="https://twitter.com/kamrify"
                                target="_blank">@kamrify</Link> or email me at
                            <Link className="underline font-bold" to="mailto:kamranahmed.se@gmail.com"
                                target="_blank">kamranahmed.se@gmail.com</Link>. I get lots of messages so apologies in advance if you don't
                            hear
                            back from me soon but I do reply to everyone.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FAQfaqSection