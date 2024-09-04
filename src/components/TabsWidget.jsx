import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import qusImg from '../assets/Vector.png'
import Dot from "./Dot";

export default function TabsWidget() {
  return (
    <div className="relative">
      <img className="absolute top-5 left-3" src={qusImg} alt="" />
      <div>
        <Dot></Dot>
      </div>
      <Tabs>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Experience</Tab>
          <Tab>Recommended</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-[#969696] text-xl font-normal">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
            <p className="mt-4">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
            <p className="mt-4">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-[#969696] text-xl font-normal">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.{" "}
            <p className="mt-4">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-[#969696] text-xl font-normal">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.{" "}
            <p className="mt-4">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
