import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllExperiences from "../components/experiences/allExperiences";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experiences.css";

const Experiences = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experiences");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experiences | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experiences" />
				<div className="content-wrapper">
					<div className="experiences-logo-container">
						<div className="experiences-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="experiences-container">
						<div className="title experiences-title">
                            An Overview of My Professional Journey
						</div>

						<div className="subtitle experiences-subtitle">
                            Below is a detailed account of my professional experience, showcasing the companies I have worked with, 
                            the roles I have undertaken, and the industries I have contributed to.
						</div>

						<div className="experiences-list">
							<AllExperiences />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experiences;
