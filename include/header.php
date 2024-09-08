<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    <?php include 'include/css.php'; ?>
    <title><?php echo isset($title) ? $title : 'Home';  ?></title>
</head>

<body>

    <header class="header">
        <div class="container">
            <div class="header-main">
                <div class="header-content">
                    <a href="index.php" class="header-logo">
                        <img src="assets/images/Online-Quran-Logo.png" alt="" class="imgFluid ">
                    </a>
                    <div class="header-nav">
                        <ul>
                            <li><a href="#" class="active">home</a></li>
                            <li><a href="#">Learn Quran Online</a></li>
                            <li><a href="#">Our Courses</a></li>
                            <li><a href="#">Price & Plan</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>

                        </ul>
                    </div>
                </div>
                <div class="header-btn">
                    <a href="#" class="themeBtn">Sign Up</a>
                </div>
            </div>
        </div>
    </header>