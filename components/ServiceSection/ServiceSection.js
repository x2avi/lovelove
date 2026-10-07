import React from "react";
import Services from '../../api/service'
import Link from 'next/link'
import SectionTitle from "../SectionTitle";
import Image from 'next/image'


const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (

        <section className={`wpo-Service-section section-padding ${props.pbClass}`} id="Service">
            <div className="container">
                <SectionTitle MainTitle={'WHAT WE OFFER FOR YOU'} subTitle={'Our Services'} />   
                <div className="wpo-Service-wrap">
                    <div className="row">
                        {Services.slice(0,4).map((service, sitem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={sitem}>
                                <div className="wpo-Service-item">
                                    <div className="wpo-Service-img">
                                        <Image src={service.simg1} alt="" />
                                    </div>
                                    <div className="wpo-Service-text">
                                        <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;