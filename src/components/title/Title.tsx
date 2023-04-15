import "./Title.scss";

type TitleProps = {
  title: string;
};

const Title = (props: TitleProps) => {
  return <h1 className="section-title">{props.title}</h1>;
};

export default Title;
