import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import OpenSourceImage from "../../assets/openSource.png";
import "../../components/singlePost/singlePost.css";
import { Create } from "@material-ui/icons";

export default function OpenSource() {
    return (
        <div className="col-12">
            <TopBar />
            <div className="d-flex mx-3 my-5">
                < Sidebar />
                <div className="singlePost">
                    <div className="singlePostWrapper">
                        < img className="singlePostImg" src={OpenSourceImage} alt="pic"/>
                        <h1 className="singlePostTitle font-mtsrt">
                            A start for open source jounery.
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-save"></i>
                                <i className="singlePostIcon far fa-heart"></i>
                                <i className="singlePostIcon fas fa-share-alt"></i>
                                <i className="singlePostIcon fas fa-bookmark"></i>
                            </div>
                        </h1>
                        <div className="singlePostInfo">
                            <span className="singlePostAuthor"> <Create /> Author: <b>Madhavi Dixit</b></span>
                            <span className="singlePostDate"> 1 min ago</span>
                        </div>
                        <p className="singlePostDesc font-popins">

                            Open source is source code that is made freely available for possible modification and redistribution. Products include permission to use the source code, design documents, or content of the product. The open-source model is a decentralized software development model that encourages open collaboration. A main principle of open-source software development is peer production, with products such as source code, blueprints, and documentation freely available to the public. The open-source movement in software began as a response to the limitations of proprietary code. The model is used for projects such as in open-source appropriate technology,and open-source drug discovery.


                            Generally, open source refers to a computer program in which the source code is available to the general public for use or modification from its original design. Code is released under the terms of a software license. Depending on the license terms, others may then download, modify, and publish their version (fork) back to the community.

                            Many large formal institutions have sprung up to support the development of the open-source movement, including the Apache Software Foundation, which supports community projects such as the open-source framework Apache Hadoop and the open-source HTTP server Apache HTTP.
<br/><br/><br/>
                            BASICS: <br/><br/>
                            A software whose source code is freely distributed with a license to study, change and further distributed to anyone for any purpose is called open source software. Open source software is generally a team effort where dedicated programmers improve upon the source code and share the changes within the community. Open source software provides these advantages to the users due to its thriving communities −
<br/>
                          <ul>
                            <li>Security</li>
                            <li>Affordability</li>
                            <li>Transparent</li>
                            <li>Interoperable on multiple platforms</li>
                            <li>Flexible due to customizations</li>
                            <li>Localization is possible</li>
                            <li>Freeware</li>
</ul><br/>
                            A software that is available free of cost for use and distribution but cannot be modified as its source code is not available is called freeware. Examples of freeware are Google Chrome, Adobe Acrobat PDF Reader, Skype, etc.
<br/><br/>
                            Shareware:
                            A software that is initially free and can be distributed to others as well, but needs to be paid for after a stipulated period of time is called shareware. Its source code is also not available and hence cannot be modified.
<br/><br/>
                            Proprietary Software:
                            Software that can be used only by obtaining license from its developer after paying for it is called proprietary software. An individual or a company can own such proprietary software. Its source code is often closely guarded secret and it can have major restrictions like −
<br/><br/>
                            No further distribution:
                            Number of users that can use it
                            Type of computer it can be installed on, example multitasking or single user, etc.
<br/><br/>

                            For example, Microsoft Windows is a proprietary operating software that comes in many editions for different types of clients like single-user, multi-user, professional, etc.

                            <br/><br/><br/>
                            Top 8 Open Source Projects for Beginners To Try in 2021:
<ul>
                            <li>30 Seconds of Code.</li>
                            <li>First Contributions.</li>
                            <li>TensorFlow Models. High-level projects.</li>
                            <li>Zulip.</li>
                            <li>Neovim.</li>
                            <li>iGraph.</li>
                            <li>Scrapy.</li>
                            <li>Jina.</li>
</ul>
                            
<br/><br/><br/>
                             GET STARTED WITH OPEN SOURCE: <br/>
                            1. How do I get started?<br/>
                            First and foremost, you must choose a programming language of your choice. Once you are done with selecting a programming language, search for a project that is interesting to you.
<br/>
                            2. How do I filter out a bug?<br/>
                            Honestly, finding a bug for a beginner is really a hard. I faced the same problems. But I will be listing down resources on how to find easy bugs and get started with contributing to a large organization.
<br/>
                            3. Open Source contributing doesn't mean contributing to well known communities only. There are huge collections of open source projects available on websites like GitHub, SourceForge, Google Code, Bitbucket etc. I also believe that just open source contribution does not help. One needs to work on side-projects for ideas to keep your ideas flowing.
                            <br/><br/><br/>





                            GSOC:
                            <br/><br/>
                            Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work on a three month programming project with an open source organization during their break from university.

                            Since its inception in 2005, the program has brought together over 17,000 student participants and over 35,000 mentors from 124 countries worldwide. Google Summer of Code has produced over 38 million lines of code for 715 open source organizations.
<br/><br/><br/>
                            HOW IT WORKS:<br/><br/>
                            Students:<br/>
                            Students contact the mentor organizations they want to work with and write up a project proposal for the summer. If accepted, students spend a few weeks integrating with their organizations prior to the start of coding. Students then have 10 weeks to code, meeting the deadlines agreed upon with their mentors.
<br/><br/>
                            Organizations:<br/>
                            Open source projects apply to be mentor organizations. Once accepted, organizations discuss possible ideas with students and then decide on the proposals they wish to mentor for the summer. They provide mentors to help guide each student through the program.
<br/><br/>
                            Mentors:<br/>
                            Existing contributors with the organizations can choose to mentor a student project. Mentors and students work together to determine appropriate milestones and requirements for the summer. Mentor interaction is a vital part of the program.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
