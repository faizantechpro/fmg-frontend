function ServiceCard({ Icon, title, description }) {
  return (
    <div className="dark:bg-[#0D567A] bg-white rounded-2xl dark:text-white w-3/4 m-auto">
      <div className="flex justify-center flex-col items-center pt-8">
        <div className="bg-[#113B73] my-2 p-8 w-28 h-28 rounded-full relative">
          <Icon />
          <div className="about-us-dot" />
        </div>
        <div className="text-xl py-6 font-bold">{title}</div>
      </div>
      <div>
        <div className="px-10 pb-12 text-center">{description}</div>
      </div>
    </div>
  );
}
export default ServiceCard;
