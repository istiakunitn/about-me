import React from "react";

import Experience from "./experience";

import INFO from "../../data/user";

import "./styles/allExperiences.css";

const AllExperiences = () => {
	return (
		<div className="all-experiences-container">
			{INFO.experiences.map((experience, index) => (
				<div className="all-experiences-experience" key={index}>
					<Experience
						years={experience.years}
						title={experience.title}
						description={experience.description}
						linkText={experience.WorkingStacks}
						link={experience.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllExperiences;
