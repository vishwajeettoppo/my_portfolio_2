import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Call,
  LocationCityOutlined,
  LocationOn,
  MyLocationOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";

const Contact = () => {
  const [viewMap, setViewMap] = useState(false);

  return (
    <section id="contact" className={`p-4 flex w-screen max-md:mt-6 pt-20`}>
      <Container>
        <div className=" md:px-4">
          <div className=" text-3xl md:text-5xl font-bold">
            <p>
              <span className=" text-primary">Talk </span>to Me
            </p>
          </div>
          <div className="text-info md:text-xl flex flex-col gap-4 mt-6">
            <div>
              <div
                onClick={() => setViewMap(!viewMap)}
                className="flex gap-4 items-center hover:bg-accent py-2 px-4 rounded-xl"
              >
                <LocationOn fontSize="large" />
                <p>Ranchi, Jharkhand</p>
              </div>
              {viewMap && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3662.275052334403!2d85.28514907442738!3d23.37826490296275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDIyJzQxLjciTiA4NcKwMTcnMTUuOCJF!5e0!3m2!1sen!2sin!4v1708316182729!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full rounded-xl aspect-square md:aspect-video"
                ></iframe>
              )}
            </div>
            <div className="flex gap-4 items-center  hover:bg-accent py-2 px-4 rounded-xl">
              <Call fontSize="large" />
              <p>
                <a href="tel:+916204644894">+91 6204644894</a>
              </p>
            </div>
            <div className=" flex  flex-col gap-2 items-end md:flex-row md:items-center">
              <input
                type="text"
                className="bg-input py-2 px-4 w-full rounded-xl"
              />
              <Button size="lg" variant="secondary" className="w-fit px-8">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
