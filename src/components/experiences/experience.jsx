import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { years, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="experience">
				<Link to={link}>
					<div className="experience-container">
						<div className="experience-years">{years}</div>
						<div className="experience-title">{title}</div>
						<div className="experience-description">{description}</div>
						<div className="experience-link">
							{/* <div className="experience-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div> */}

							<div className="experience-link-text">Working Stacks: {linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Experience;
