import { ScaleLoader } from "react-spinners";


const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ScaleLoader loading={true}/>
    </div>
  );
};

export default Loading;
