import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Button, Select, Space, Input, Pagination } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import styles from "./course.module.css";
import { getAllCourses } from "./course.action";
import HomeCourse from "./HomeCourse";
import FilterCourse from "./FilterCourse";
import { FormattedMessage, useIntl } from "react-intl";

const Course = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(false);
  const [searchTab, setSearchTab] = useState(false);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("Title");
  const [price, setPrice] = useState("Price");
  const [type, setType] = useState("Type");
  const { courses } = useSelector((state) => state.course);
  const [result, setResult] = useState([]);
  const [current, setCurrent] = useState(1);
  const intl = useIntl();
  const { Option } = Select;

  const handleChange = (value) => {
    setTitle(value);
    const result = courses.filter(
      (item) => item.title.toLowerCase() === value.toLowerCase()
    );
    if (result.length > 0) {
      setResult(result);
    }
  };
  const handlePrice = (value) => {
    setPrice(value);
    const result = courses.filter((item) => item.price == value);
    if (result.length > 0) {
      setResult(result);
    }
  };
  const handleType = (value) => {
    setType(value);
    const result = courses.filter(
      (item) => item.type.toLowerCase() == value.toLowerCase()
    );
    if (result.length > 0) {
      setResult(result);
    }
  };

  const handleClear = () => {
    setTitle("");
    setPrice("");
    setType("");
    setResult(courses);
  };

  const handleTab = () => {
    setActiveTab(!activeTab);
    setSearchTab(false);
  };
  const handleSearch = () => {
    setSearchTab(!searchTab);
    setActiveTab(false);
  };
  const handleSort = (value) => {
    if (value === "1") {
      const result = courses.sort((a, b) => {
        return a.price - b.price;
      });
      if (result.length > 0) {
        setResult(result);
      }
    }
    if (value === "2") {
      const result = courses.sort((a, b) => {
        return b.price - a.price;
      });
      if (result.length > 0) {
        setResult(result);
      }
    }
  };
  const handleSubmit = () => {
    const result = courses.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if (result.length > 0) {
      setResult(result);
    } else {
      setResult([]);
    }
  };

  const onChange = (page) => {
    setCurrent(page);
    setResult(courses);
  };

  const IndexOfLastReview = current * 6;
  const IndexOfFirstReview = IndexOfLastReview - 6;
  const allCourses = result.slice(IndexOfFirstReview, IndexOfLastReview);
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch, result]);

  return (
    <div className="dark:bg-gradient-to-r from-[#00062E] to-[#016EA4] bg-[#F2F2F2] py-6 xl:px-20 lg:px-16 px-4">
      <div className="md:text-3xl text-xl dark:text-white font-bold md:py-6 py-4">
        <div>
          <FormattedMessage id="homePageCourses" />
        </div>
        <div className="bg-[#ED3276] h-2 md:w-32 w-16"></div>
      </div>
      <div className="flex justify-between  dark:text-white font-bold pt-4">
        <div className="flex w-24 justify-between">
          <Button
            type="link"
            className="dark:text-white"
            icon={<SearchOutlined className={styles.icon} />}
            size="large"
            onClick={handleSearch}
          />
          <div className="h-full w-1 border-2	border-white"></div>
          <Button
            type="link"
            className="dark:text-white"
            icon={<FilterOutlined className={styles.icon} />}
            size="large"
            onClick={handleTab}
          />
        </div>
        <div>
          <div className="md:text-lg text-sm">
            <FormattedMessage id="coursesTitle" />
          </div>
          <div className="bg-[#ED3276] h-2 md:w-32 w-24"></div>
        </div>
        <div>
          <Select
            // defaultValue="1"
            className="md:w-40 w-28 bg-[#0897DD] dark:bg-transparent"
            dropdownClassName="dark:bg-[#016194]"
            onChange={handleSort}
          >
            <Option value="1">
              <FormattedMessage id="lowToHigh" />
            </Option>
            <Option value="2">
              <FormattedMessage id="highToLow" />
            </Option>
            <Option value="3">
              <FormattedMessage id="newest" />
            </Option>
          </Select>
        </div>
      </div>
      <div className="">
        {activeTab && (
          <div
            className={`lg:h-16 h-28 flex items-center justify-between dark:bg-[#E5E5E51A] bg-[#0897DD]  ${styles.containers}`}
          >
            <Space size={[16, 16]} wrap>
              <div className="text-white text-lg">Filter by :</div>
              <Select
                // defaultValue="Title"
                dropdownClassName="dark:bg-[#016194] border-2 border-white"
                className="md:w-40 w-28"
                value={title}
                onChange={handleChange}
              >
                <Option value="course video">Video</Option>
                <Option value="course audio">Audio</Option>
                <Option value="course title">Title</Option>
              </Select>
              <Select
                // defaultValue="Price"
                dropdownClassName="dark:bg-[#016194]  border border-white"
                className="md:w-40 w-28"
                value={price}
                onChange={handlePrice}
              >
                <Option value="45">Price $ 45</Option>
                <Option value="50">Price $ 50</Option>
                <Option value="100">Price $ 100</Option>
              </Select>
              <Select
                // defaultValue="Type"
                dropdownClassName="dark:bg-[#016194] border-2 border-white hover:bg-[#016194]"
                className="md:w-40 w-28"
                value={type}
                onChange={handleType}
              >
                <Option value="beginner">
                  <FormattedMessage id="beginner" />
                </Option>
                <Option value="intermediate">
                  <FormattedMessage id="intermediate" />
                </Option>
                <Option value="expert">
                  <FormattedMessage id="expert" />
                </Option>
              </Select>
            </Space>
            <Button size="large" className="text-white" onClick={handleClear}>
              Clear
            </Button>
          </div>
        )}
        {searchTab && (
          <div
            className={`lg:h-16 h-28 flex justify-between items-center dark:bg-[#E5E5E51A] bg-[#0897DD] ${styles.search}`}
          >
            <Input
              className="w-1/2 border rounded-lg bg-[#E5E5E51A] text-white h-10 text-base"
              placeholder="Type to Search"
              value={search}
              allowClear
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              size="large"
              className="dark:text-white"
              onClick={handleSubmit}
            >
              Search
            </Button>
          </div>
        )}
      </div>
      <Row gutter={{ xs: 8, sm: 16, md: 50 }}>
        {allCourses.length > 0 ? (
          <FilterCourse result={allCourses} />
        ) : (
          <HomeCourse course={courses.slice(0, 6)} />
        )}
      </Row>
      <div className="flex justify-end w-10/12">
        <Pagination
          pageSize={6}
          current={current}
          onChange={onChange}
          total={courses.length}
        />
      </div>
    </div>
  );
};

export default Course;
