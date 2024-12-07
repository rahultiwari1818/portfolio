import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function ({data}) {
    return (
        <VerticalTimeline lineColor='blue'>
            {
                data && data?.map((ele)=>{
                    return (
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={ele?.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<img src={ele?.logo} alt="logo"/> }
                        >
                        <h3 className="vertical-timeline-element-title">{ele?.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{ele?.subtitle}</h4>
                        <p>
                            {
                                ele?.desc ? ele?.desc : ""
                            }
                        </p>
                        </VerticalTimelineElement>
                    )
                    
                })
            }
        </VerticalTimeline>
    );
}
