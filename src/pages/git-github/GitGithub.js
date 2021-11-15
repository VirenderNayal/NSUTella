import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/TopBar/TopBar";
import GitGihubImage from "../../assets/git-github.png";
import "../../components/singlePost/singlePost.css";
import { Create } from "@material-ui/icons";

export default function GitGihub() {
    return (
        <div className="col-12">
            <TopBar />
            <div className="d-flex mx-3 my-5">
                < Sidebar />
                <div className="singlePost">
                    <div className="singlePostWrapper">
                        < img className="singlePostImg" src={GitGihubImage} />
                        <h1 className="singlePostTitle font-mtsrt">
                            What is Git and Github?
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
                            What is Git?
                            Git is a free, open-source version control software. It was created by Linus Torvalds in 2005. This tool is a version control system that was initially developed to work with several developers on the Linux kernel.

                            This basically means that Git is a content tracker. So Git can be used to store content — and it is mostly used to store code because of the other features it provides.

                            Real life projects generally have multiple developers working in parallel. So they need a version control system like Git to make sure that there are no code conflicts between them.

                            Also, the requirements in such projects change often. So a version control system allows developers to revert and go back to an older version of their code.

                            The branch system in Git allows developers to work individually on a task (For example: One branch &rarr One task OR One branch &rarr One developer). Basically think of Git as a small software application that controls your code base, if you’re a developer.



                            ************************************USES OF GIT:  ***************************
                            Git makes it easy to contribute to open source projects
                            Documentation
                            Integration options
                            Track changes in your code across versions
                            Showcase your work


                            ******************************Git Repositories **********************************
                            If we want to start using Git, we need to know where to host our repositories.

                            A repository (or “Repo” for short) is a project that contains multiple files. In our case a repository will contain code-based files.

                            There are two ways you can host your repositories. One is online (on the cloud) and the second is offline (self-installed on your server).

                            There are three popular Git hosting services: GitHub (owned by Microsoft), GitLab (owned by GitLab) and BitBucket.


                            *********************************How to Use Git *************************************************

                            ***********Learning & Mastering Git Commands:

                            If you're getting started with Git, a great place to start is the Git Cheat sheet. It's translated into many languages, open source as a part of the github/training-kit repository, and a great starting place for the fundamentals on the command line.

                            ********Some of the most important and most used commands that you'll find there are:

                            &rarr git clone [url]: Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.

                            &rarr git status: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.

                            &rarr git branch: This shows the existing branches in your local repository. You can also use git branch [banch-name] to create a branch from your current location, or git branch --all to see all branches, both the local ones on your machine, and the remote tracking branches stored from the last git pull or git fetch from the remote.

                            &rarr git checkout [branch-name]: Switches to the specified branch and updates the working directory.

                            &rarr git add [file]: Snapshots the file in preparation for versioning, adding it to the staging area.

                            &rarr git commit -m "descriptive message": Records file snapshots permanently in version history.

                            &rarr git pull: Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. git pull is a combination of git fetch and git merge.

                            &rarr git push: Uploads all local branch commits to the remote.

                            &rarr git log: Browse and inspect the evolution of project files.

                            &rarr git remote -v: Show the associated remote repositories and their stored name, like origin.






                            ***************************Getting Started With GitHub *************************
                            If you're wondering where Git ends and GitHub begins, you're not alone. They are tied closely together to make working with them both a seamless experience. While Git takes care of the underlying version control, GitHub is the collaboration platform built on top of it. GitHub is the place for pull requests, comments, reviews, integrated tests, and so much more. Most developers work locally to develop, and use GitHub for collaboration. That ranges from using GitHub to host the shared remote repository, to working with colleagues and capitalizing on features like protected branches, code review, GitHub Actions, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
