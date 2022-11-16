import { Card, Col } from 'antd';

const PostItem = (props) => {
    const { post } = props;
    const{id, author, title, comments} = post;
    console.log(id);
    return (
        <div style={{ margin: "5px" }}>
            <Col span={4}>
                <Card style={{ width: 300, height: 250 }}>
                    <a>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h3><b>Title:</b></h3>
                            <h3 style={{ marginLeft: "5px", color: "#0008C1" }}>{title}</h3>
                        </div>
                    </a>
                    <p> <b>Author:</b> {author.name}</p>
                    <p> <b>Total Comments:</b> {comments.length}</p>
                </Card>
            </Col>
        </div>
    );
};

export default PostItem;
