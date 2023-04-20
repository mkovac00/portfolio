import "./Title.scss";

type TitleProps = {
  title: string;
  id: string;
};

const Title = (props: TitleProps) => {
  return (
    <h1 id={props.id} className="section-title">
      {props.title}
    </h1>
  );
};

export default Title;
