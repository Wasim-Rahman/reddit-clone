import React from "react";

function Card() {
  return (
    <div className="bg-white my-5 p-3 sm:mx-6 rounded-md">
      {/* Subreddit logo and posted by */}
      <div className="flex pb-2 text-xs">
        <h1 className="font-medium">SubredditLogo</h1>
        <h3 className="mx-2 text-gray-400"> posted by .......</h3>
      </div>

      {/* Title and content */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Post title</h2>
        <p className="mb-4 text-sm">
          Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Earum placeat facere sed hic beatae! Quidem cumque rerum adipisci
          aspernatur modi doloribus. Cupiditate quod explicabo incidunt odio
          officiis porro aut praesentium voluptatum maiores facere. Neque libero
          magni animi, ut facilis quae. Aut nobis aperiam quam ea, nesciunt eos
          facere magnam quaerat eius tempore. Expedita, officia odit ex
          obcaecati vel suscipit, rem illum cupiditate, dolore quis ipsa
          accusantium sint eligendi quaerat iste id maxime. Vitae et excepturi,
          perferendis culpa ipsam ducimus velit dignissimos quam veritatis
          provident corporis corrupti minima architecto ea. Amet iure nulla
          possimus deserunt facilis ullam minima laudantium id provident?
        </p>
      </div>

        {/* votes and comments */}
      <div className="flex text-sm">
        <p>Votes: 18</p>
        <p className="px-4">Comments</p>
      </div>
    </div>
  );
}

export default Card;
