import { Container, Row, Col} from "react-bootstrap"
import { Player } from 'video-react';

export const ProjectCard = ({title, description, imgUrl, vid, link}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            {vid ? 
                <Player 
                    playsInline
                    poster={imgUrl}
                    src={vid}
                    fluid="false"
                />:<img className="projectimg" src={imgUrl} />
            }
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <a target="_blank" rel="noopener noreferrer" href={link}><span>{description}</span></a>
                </div>
            </div>
        </Col>
    )
}
