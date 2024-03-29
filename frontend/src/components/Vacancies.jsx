import React from "react";
import Vacancy from "./Vacancy.jsx";

function Vacancies({vacancies}) {


  return (
    <div className="flex flex-col pb-10 w-full">
      {vacancies &&
        vacancies.map((vacancy) => (
          <Vacancy
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.attributes.title}
            company={vacancy.attributes.company.data.attributes.name}
            location={vacancy.attributes.company.data.attributes.location}
            experience={vacancy.attributes.experience}
            description={vacancy.attributes.description}
          />
          
        ))}
    </div>
  );
}

export default Vacancies;


