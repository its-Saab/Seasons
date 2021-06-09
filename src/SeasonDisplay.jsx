//npm packages

//project files
import "./style/SeasonDisplay.css"

const seasonConfig = {
	summer: { text: "Let's hit the beach!", iconName: "sun" },
	winter: { text: "Burr it's cold!", iconName: "snowflake" },
};

const getSeason = (month, lat) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

export const SeasonDisplay = ({ lat }) => {
	const month = new Date().getMonth();
	const season = getSeason(month, lat);
	const { text, iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`} >
			<i className={`icon-left massive ${iconName} icon`} />
			<h1 className="text" > {text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};
