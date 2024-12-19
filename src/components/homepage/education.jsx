import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/educations.css";

const Educations = () => {
	return (
		<div className="educations">
			<Card
				icon={faBriefcase}
				title="Education"
				body={
					<div className="educations-body">
						<div className="education">
							<img
								src="./logo_unitrento.png"
								alt="unitrento"
								className="education-image"
							/>
							<div className="education-title">University of Trento, Italy</div>
							<div className="education-subtitle">
								Masters in Computer Science
							</div>
							<div className="education-duration">2012 - 2015</div>
						</div>

						<div className="education">
                            
							<img
								src="./aiub.png"
								alt="aiub"
								className="education-image"
							/>
							<div className="education-title">American International University-Bangladesh</div>
							<div className="education-subtitle">
								BSc in Computer Science and Engineering
							</div>
							<div className="education-duration">2008 - 2012</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Educations;
