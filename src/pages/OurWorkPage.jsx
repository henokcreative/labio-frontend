import "./OurWorkPage.css";
import Hero from "../components/Hero";
import BrandName from "../components/BrandName";
import FeaturedProjectRow from "../components/landing/FeaturedProjectRow";

const OurWorkPage = () => {
    const projects = [
        { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
        { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
        { title: "Video Production", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
        { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
        { title: "Live Streaming", imgUrl: "assets/projects/project5.jpg", link: "/live-stream" },

    ];
    return (
        <div className="our-work-page">
            <Hero
                title={<BrandName />}
                subtitle="A showcase of our multimedia projects in scientific communication."
            />

            <section className="projects-alt-section col-md-10 container" id="projects">
                {projects.map((project, idx) => (
                    <FeaturedProjectRow
                        key={idx}
                        title={project.title}
                        imgUrl={project.imgUrl}
                        link={project.link}
                        reverse={idx % 2 === 1}
                    />
                ))}
            </section>
        </div>
    );

};
export default OurWorkPage;