import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Icon } from '../../icon/Icon';

import 'swiper/css';
import './mainPage.scss';

import mainImg from '../../../img/main-img.png';
import iconBg from '../../../img/bg-1.svg';
import iconBgSecond from '../../../img/bg-2.svg';
import iconBgThird from '../../../img/bg-3.svg';
import iconBgFourth from '../../../img/bg-4.svg';
import introductionFirst from '../../../img/introduction-img-1.png';
import introductionSecond from '../../../img/introduction-img-2.png';
import inspectingImgFirst from '../../../img/inspecting-img-1.png';
import inspectingImgSecond from '../../../img/inspecting-img-2.png';

const MainPage = () => {

    return (
        <main className="main">

            <section className="main-start">
                <div className="container">
                    <div className="main-start__wrap">
                        <img src={iconBg} alt="Æather" className="icon-bg" />
                        <div className="main-start__text">
                            <h1 className="heading-primary">Æather</h1>
                            <h2 className="heading-secondary">— a communication platform</h2>
                            <div className="main-start__descr">Aether is a distributed cloud M2M communication and online presence service. Want to send messages from one instance of your mobile, IoT, desktop and web app to another? <br /><br />
                                Aether in two steps, send a message and forget - Aether takes the rest: encryption, replication, DDoS protection and guaranteed real-time delivery at scale.</div>
                        </div>
                        <img src={mainImg} alt="Æather" className="main-start__img" />
                    </div>
                    <Swiper
                        className='main-start__slider'
                        spaceBetween={15}
                        slidesPerView={'auto'}
                    >
                        <SwiperSlide className="main-start__slider-item">Source code of server and client<br /> under Apache 2.0 license</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Uses UDP, TCP, HTTP, HTTPS<br /> to bypass network filters</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Encryption with<br /> LibSodium*</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Encryption, authentication and<br /> authorization with LibSodium</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Highly reliable with smart<br /> replication, several QoS levels</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Minimum delivery latency due<br /> to choosing of a local server</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Supporting offline<br /> messages</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Protected against DDoS<br /> attacks</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Open source client and<br /> single node server</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">API to create managed infrastructure with<br /> roles, access rights, permissions, quotas</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Suitable for networks with high packet loss rate (GSM) by using<br /> single packet message sending approach (No roundtrips)</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">Supports multiple transport<br /> protocols (websocket, tcp, http(s),)</SwiperSlide>
                        <SwiperSlide className="main-start__slider-item">DDoS Protection with proof-of-<br />compute authentication</SwiperSlide>
                    </Swiper>

                    <div className="main-start__adv">
                        <div className="main-start__adv-item">
                            <div className="main-start__adv-name">Guaranteed message delivery:</div>
                            <div className="main-start__adv-descr">Fault tolerance is improved with message replication on multiple Aether servers</div>
                            <div className="main-start__adv-descr">Messages are kept on Aether servers awaiting the destination to be online</div>
                        </div>
                        <div className="main-start__adv-item">
                            <div className="main-start__adv-name">Minimizing delivery latency:</div>
                            <div className="main-start__adv-descr">When an Aether server failures</div>
                            <div className="main-start__adv-descr">When an Aether server becomes invisible for sender or receiver</div>
                            <div className="main-start__adv-descr">High % packet loss</div>
                        </div>
                        <div className="main-start__adv-item">
                            <div className="main-start__adv-name">IoT friendly:</div>
                            <div className="main-start__adv-descr">fire a packet and go to sleep (No roundtrips)</div>
                            <div className="main-start__adv-descr">minimum binary footprint</div>
                        </div>
                        <div className="main-start__adv-item">
                            <div className="main-start__adv-name">IoT friendly:</div>
                            <div className="main-start__adv-descr">minimum binary footprint</div>
                            <div className="main-start__adv-descr">No roundrips for sending / receiving messages</div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="main-introduction" id="introduction">
                <div className="container">
                    <div className="main-introduction__wrap --narrow">
                        <h2 className="heading-secondary">Introduction</h2>
                        <div className="main-introduction__text">Aether is a cloud of servers through which clients send / receive messages and check online presence. A client library is used for interacting through the proprietary binary protocol. The client library API is trivial and contains Initialization function with call-back for receiving messages and a function to send a message to a particular aether client.</div>
                    </div>
                    <Tabs className="main-introduction__tabs" selectedTabClassName="active">
                        <TabList className="main-introduction__info">
                            <Tab className="main-introduction__info-btn">Client</Tab>
                            <Tab className="main-introduction__info-btn">Owner</Tab>
                        </TabList>
                        <div className="main-introduction__content">
                            <TabPanel className="main-introduction__tab">
                                <div className="main-introduction__tab-descr">An Aether client is represented with a non-secret unique identifier (uid) and a secret session key that is known to Aether cloud and the client. The uid is permanent. A client can request
                                    Aether to re-generate the session key at any time. [Uid is often hard coded for the owner — described below — so the only way to continue to work in case if the session key is compromised
                                    is to re-generate it]. The client can send a message to another client by using the addressee uid. The receiver gets the message data (binary blob) and the sender's uid.</div>
                                <img src={introductionFirst} alt="introduction" className="main-introduction__tab-img" />
                            </TabPanel>
                            <TabPanel className="main-introduction__tab">
                                <div className="main-introduction__tab-descr">When a client library is initialized for the first time a new Aether client is created – Aether
                                    generates an uid and a session key for the client. A parent client uid must be specified at the
                                    initialization step for the new client. A parent is notified when a new child client is created [It is
                                    done via message because the owner can be offline at the event time. The sender is Aether to
                                    filter these messages by sender uid]. The parent is the client that takes ownership of the newly
                                    created client. The ownership includes an ability to delete, block, transfer, manage quotas, allow
                                    sending messages etc. All aether clients are divided into the non-crossing amespaces by owners.
                                </div>
                                <div className="main-introduction__tab-descr">A hierarchy of
                                    owners (tree) can be built. The topmost owner is the Aether with a predefined uid [That uid is
                                    not zero to avoid default initialized variable (typically by 0) to be valid]. A client is controlled by
                                    the parent owner and all other predecessors only. [If only the parent controls the client then a
                                    predecessor can force managing any client through the direct parent by threatening the parent
                                    with, say, deletion of the parent]. A newly created client by default can't have children nodes [To
                                    be not spammed with the notifications about newly created children]. The owner can give a
                                    permission to allow a client to have children. The owner can give a permission to a child node to
                                    transit this permission further.</div>
                                <img src={introductionSecond} alt="introduction" className="main-introduction__tab-img" />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </section>

            <section className="main-info">
                <div className="container --narrow">
                    <div className="main-info__item" id="app-server">
                        <h2 className="heading-secondary">Application server</h2>
                        <div className="main-info__descr">Aether is not a server-less solution. While Aether takes almost all routine, the application server
                            manages communication permissions of clients, sets quotas as the bare minimum. An application server is the Aether client and can be hosted anywhere with no public IP shown. An
                            application server can be split into multiple sub-servers performing different tasks.</div>
                    </div>
                    <div className="main-info__item" id="proof">
                        <h2 className="heading-secondary">Proof of computation</h2>
                        <div className="main-info__descr">Aether uses proof of computation to prevent DDoS attacks against the service with the new
                            clients creations. A client library enerates a random number, concatenates with the current
                            timestamp and computes the hash value until the hash is less than a certain maximum value.
                            Aether verifies that the timestamp is within a few seconds, the random number has never been
                            used before and the hash value is less than the maximum allowed. Ather creates a new client if
                            it's ok otherwise replies with the current timestamp and a current maximum value of the hash
                            allowed. The owner sets the maximum allowed value to themself because the value controls the
                            rate at which the owner is notified with the newly created clients [An owner can't set maximum
                            value to a child because the child can be very specific and limited in computational power, like in
                            microcontroller].</div>
                        <img src={iconBgSecond} alt="Æather" className="icon-bg" />
                    </div>
                </div>
            </section>

            <section className="main-messages" id="messages">
                <div className="container --narrow">
                    <h2 className="heading-secondary">Messages</h2>
                    <div className="main-messages__wrap">
                        <div className="main-messages__descr">A newly created client is not allowed to receive messages. The owner uses the Aether method
                            to explicitly allow child clients to receive messages from clients defined by explicitly specified
                            uids [Aether uses “allow receiving” instead of “allow sending” to avoid spamming other clients
                            belonging to other owners]. A sender is any aether client. The client can receive messages from
                            the owner only if the owner allows it. A client can't allow receiving messages to themself with
                            just one exception - receiving from child clients at any hierarchy level. </div>
                        <div className="main-messages__descr">Also a “subtree” flag can
                            be specified to allow receiving messages from all clients at any depth level of the node specified
                            by uid. <br /><br />
                            If the Aether uid is specified with the “subtree” flag then the client can receive messages
                            from any Aether client. A client can't send messages to themself [ Sending a message to
                            themself is useless because the message is received immediately with the reply of the Aether server. An attempt to send a message to themself or to another client that has no permission to receive the message has a cost of sending a message. That should help prevent spam.].</div>
                        <img src={iconBgThird} alt="Æather" className="icon-bg" />
                    </div>
                </div>
            </section>

            <section className="main-inspecting" id="inspecting">
                <div className="container --narrow">
                    <div className="main-inspecting__wrap">
                        <div className="main-inspecting__text">
                            <h2 className="heading-secondary">Inspecting a client</h2>
                            <div className="main-inspecting__descr">An owner is able to retrieve the information about any direct or indirect child client:</div>
                        </div>
                        <div className="main-inspecting__list">
                            <div className="main-inspecting__item">
                                <div className="main-inspecting__name">A list of uids from which the client is able to receive messages</div>
                                <img src={inspectingImgFirst} alt="uids" className="main-inspecting__img" />
                            </div>
                            <div className="main-inspecting__item">
                                <div className="main-inspecting__name">A list of child clients</div>
                                <img src={inspectingImgSecond} alt="child clients" className="main-inspecting__img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-info --other">
                <div className="container --narrow">
                    <div className="main-info__item" id="tarification">
                        <h2 className="heading-secondary">Tarification</h2>
                        <div className="main-info__descr">Any request to any Aether server is counted in USD by current cost of service that depends on
                            type of request, amount of data transferred etc.</div>
                    </div>
                    <div className="main-info__item">
                        <h2 className="heading-secondary">Account</h2>
                        <div className="main-info__descr">
                            A particular amount is subtracted from the Aether client's account. The balance of the account
                            is zero for the newly created client. <br />
                            Charging a child charges all parents. <br /><br />
                            A user can replenish the account of any client at any time — all parents' accounts are replenished
                            too.
                        </div>
                        <img src={iconBgFourth} alt="Æather" className="icon-bg" />
                    </div>
                    <div className="main-info__item">
                        <h2 className="heading-secondary">Try-on money</h2>
                        <div className="main-info__descr">The balance of a newly created client is zero except for the client that has Aether as the owner.
                            Aether sets a $10 balance for a new child client. It allows the use of Aether for “free” for up to
                            this limit. The maximum hash value for creation of a new user under the Aether's ownership is
                            pretty large, which leads to approximately 10 minutes of computing on an average desktop PC
                            to prevent abuse.</div>
                    </div>
                    <div className="main-info__item">
                        <h2 className="heading-secondary">The balance is too low</h2>
                        <div className="main-info__descr">
                            If the balance of a client is zero then the client service is limited. Aether server replies to any
                            request with the duration of time after which another request can be performed. All requests <br /><br />
                            prior to that period are dropped and the time of waiting starts from the beginning [It can be a bit
                            difficult to count a time on some constrained devices but that's the exceptional situation. The
                            duration is returned instead of a time point because some devices have no real-time clock.].
                            If a particular node's account is zero then all children nodes with any balance at any depth are
                            limited in service because all charges of children are subtracted from the owner's account.
                        </div>
                        <img src={iconBg} alt="Æather" className="icon-bg" />
                    </div>
                </div>
            </section>

        </main >
    )

}

export default MainPage;