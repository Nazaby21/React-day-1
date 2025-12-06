import React from "react";

function CourseCard(){
    const title = "React Course";
    const subTitle = "Learn from the best instructor";
    const courseImg = "https://reactnative.dev/img/logo-og.png";

    return(
        <div className="row">
            <div className="col-4">
                <div class="card">
                <img src = {courseImg} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{subTitle}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;