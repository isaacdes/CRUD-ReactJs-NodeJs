import '../css/main.css'
import '../css/bootstrap.min.css'
import '../css/bootstrap-grid.min.css'


const Content = () => {
    return (
        <div class="container-fluid">
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">SKATE</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Videos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Photos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Swag</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Pants</a>
              <a class="dropdown-item" href="#">Shirts</a>
              <a class="dropdown-item" href="#">Apparel</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="sectionLight">
      <div class="row">
        <div class="col-sm-12">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-3">Welcome to my World</h1>
              <p class="lead">Total Radness since 1987</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col"></div>
        <div class="col-sm-12 col-md-6">
          <div id="mainCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                {/* <img class="d-block img-fluid" src="assets/board.jpg" alt="First slide"> */}
              </div>
              <div class="carousel-item">
                {/* <img class="d-block img-fluid" src="assets/tipsolahraga.jpg" alt="Second slide"> */}
                <div class="carousel-caption d-none d-md-block">
                  <h3>Skate for life!</h3>
                  <p>Show me some tricks</p>
                </div>
              </div>
              <div class="carousel-item">
                {/* <img class="d-block img-fluid" src="assets/longboard.jpg" alt="Third slide"> */}
              </div>
            </div>
            <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
    </div>
    )

};

export default Content;