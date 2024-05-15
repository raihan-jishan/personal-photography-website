import Hero from "@/components/Hero.jsx";
import Portfolio from "@/components/Portfolio";
import WorkNavigation from "@/components/ui/WorkNavigation";
import { image1, image2, image3, image4, image5 } from "@/utils/constance";
const work = () => {
  return (
    <div>
      <WorkNavigation />
      <Hero
        heading={"My Work"}
        message={"This is some of my recent work traveling the world."}
      />

      {/* travel photo */}
      <Portfolio
        sectionId={"travel-photo"}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        image5={image5}
        pageText={"Travel Photos"}
      />

      {/* nature */}

      <Portfolio
        sectionId={"nature-photo"}
        image1={
          "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }
        image2={
          "https://images.unsplash.com/photo-1585801442122-96dd773c76fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }
        image3={
          "https://images.unsplash.com/photo-1632446087139-e93c41c11f56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }
        image4={
          "https://images.unsplash.com/photo-1549593076-9556c5abdc1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }
        image5={
          "https://images.unsplash.com/photo-1634150607959-62c965982999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
        }
        pageText={"Nature Photos"}
      />
      {/* cars photo */}

      <Portfolio
        sectionId={"cars-photo"}
        image1={
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"
        }
        image2={
          "https://images.unsplash.com/photo-1542362567-b07e54358753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D"
        }
        image3={
          "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
        }
        image4={
          "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
        }
        image5={
          "https://images.unsplash.com/photo-1607854962760-514f1c4a8609?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        pageText={"Cars Photos"}
      />
    </div>
  );
};

export default work;
