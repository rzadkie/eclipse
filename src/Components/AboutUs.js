import { useEffect } from "react";
import "../App.scss";
import "./AboutUs.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const AboutUs = () => {
	return (
		<div className="Wrapper1">
			<div className="Content" id="AboutUs">
				<h1>About</h1>

				<Carousel
					showThumbs={false}
					interval={10000}
					infiniteLoop={true}
					className="Carousel"
					autoPlay="true"
					useKeyboardArrows="true"
					showStatus={false}
				>
					<div className="CarouselSegment" id="ThemeDescription">
						<p>
							Ov Magic and Forest <br />
						</p>
						<p>
							Melodic black metal from Poland inspired by ancient ways and
							mysterious grimoires <br />
						</p>
						{/* <iframe src='https://www.youtube.com/watch?v=g8n4pYxVl8U'></iframe> */}
					</div>

					<div className="CarouselSegment" id="UsDescription">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</div>

					<div className="CarouselSegment" id="Images">
						<p>gallery img</p>
						<p>img</p>
						<p>img</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default AboutUs;
