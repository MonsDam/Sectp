import React from "react";


function Card_Fishtank(){
    return(
        <div className="div-margin">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col border-card">
                    <div className="card h-100 border-card ">
                        <img src="/images/fish.jpg" className="card-img-top img-fish" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Pecera 1</h5>
                            <p className="card-temperature">22°C</p>
                            <a href="#" className="btn btn-primary">See more</a>
                        </div>
                    </div>
                </div>
                {/* <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum consequatur provident quaerat impedit vitae blanditiis est, non autem nulla dignissimos. Quos libero deserunt sapiente facere id a dignissimos iste asperiores!</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}

export default Card_Fishtank