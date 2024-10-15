import React from "https://esm.sh/react";

export default ({ 
    comp, 
    image_url,
    card_header,
    tags,
    time_posted,
    description,
    redirect_url,
    redirect_url_text, }) => {
    return (
      <figure className="flex-col flex w-full border border-black rounded-lg lg:p-5 p-8 lg:max-w-[1280px]">
        <table className="table-fixed border">
            <td className="w-8/12 border border-black">
                <h1> {"Stevens Blueprint Blog"} </h1>
                <p> {time_posted} </p>
                <table> 
                    <td className="border">{card_header}</td>
                    <td className="border">{tags}</td>
                </table>
                <comp.Button
                    style={"lg:mt-5 mt-4 flex justify-center items-center"} 
                    href={redirect_url}
                    text={redirect_url_text}
                />
                <p> {description} </p>
                <div className="lg:mt-5 mt-4 flex justify-center items-center">
                    <a
                    className="text-primary font-semibold lg:text-2xl text-4xl"
                    href={redirect_url}> {redirect_url_text} </a>
                </div>
            </td>
            <td className="border border-black">
            {image_url && (
                <div className="flex justify-center items-center w-full">
                    <img
                    src={image_url}
                    alt={`${card_header} Image`}
                    className="h-full w-full object-cover rounded-xl lg:max-w-[429px]"
                    />
                    </div>
                )}
            </td>
        </table>
      </figure>
    );
  }  