import Image from "next/image";
import { Rate, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const ReviewCard = ({
  OnNext,
  OnPrev,
  img,
  title,
  description,
  titleArabic,
  descriptionArabic,
  value,
  userName,
}) => {
  const router = useRouter();
  const language = router.locale;

  return (
    <div>
      <div className="flex items-center justify-between px-2 sm:px-6 lg:px-8 h-[500px]">
        <div>
          <Button
            icon={<LeftOutlined className="flex items-center" />}
            size="large"
            className="bg-white"
            onClick={OnNext}
          />
        </div>
        <div className="w-2/3 h-[333px] text-center text-white rounded-[100px] dark:bg-[#184765] bg-white">
          <div className="absolute inset-x-0 top-7">
            {/* <Image src={img} alt="Picture of the author" width="125px" height="125px" /> */}
          </div>
          <div className="flex flex-col	justify-center h-[323px] px-2 sm:px-6 lg:px-8">
            {language == "ar" ? (
              <>
                <h2 className="dark:text-white text-lg	font-bold h-8">
                  {titleArabic}
                </h2>
                <h2 className="dark:text-white h-20 overflow-auto flex items-center justify-center">
                  {descriptionArabic}
                </h2>
              </>
            ) : (
              <>
                <h2 className="dark:text-white text-lg	font-bold h-8">
                  {title}
                </h2>
                <h2 className="dark:text-white h-20 overflow-auto flex items-center justify-center">
                  {description}
                </h2>
              </>
            )}
            <span>
              <Rate value={value} disabled />
              {value && (
                <span className="ant-rate-text">
                  <span className="text-lg text-black dark:text-white">
                    - {userName}
                  </span>
                </span>
              )}
            </span>
          </div>
        </div>
        <div>
          <Button
            icon={<RightOutlined className="flex items-center" />}
            size="large"
            className="bg-white"
            onClick={OnPrev}
          />
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
