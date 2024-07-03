/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import BasicModal from "./Modal/ModalCard";

interface SingleCardProps {
  image: string;
  Button?: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="mb-5 m-10 content-center overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary dark:border-dark-3 dark:text-dark-6"
            >
              <BasicModal /> 
            </a>
          )}
        </div>
      </div>
    </>
  );
};

const Card: FC = () => {
  return (
    <>
      <section className="bg-gray-2 item-center pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[10px] max-w-[510px] text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Coming Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <SingleCard
            image="https://i.pinimg.com/564x/51/80/8c/51808c44c3e82d45fdffedee194186b1.jpg"
            CardTitle="50+ Best creative website themes & templates"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />

          <SingleCard
            image="https://i.pinimg.com/564x/31/2f/7e/312f7e7f0071826c4fdb5791e3a5cc5b.jpg"
            CardTitle="Creative Card Component designs graphic elements"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.pinimg.com/564x/d6/df/54/d6df54537b8ddfc6123b3e7004a7dbd7.jpg"
            CardTitle="The ultimate UX and UI guide to card design"
            CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </section>
    </>
  );
};

export default Card;
