import Nav from './nav';

export default function About(){
    return(
        <div>
            <header>
                <Nav />
            </header>

            <section>
                <div className="about-me">
                    <h1>Hi! I'm <span>John</span></h1>
                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit dolor eget felis rutrum, non convallis nunc ultricies. Aenean tincidunt turpis ac mauris mollis, quis imperdiet lorem accumsan. Cras vitae urna et odio tincidunt posuere. Nullam fringilla, justo eget mattis consectetur, dolor purus tristique nunc, sed bibendum turpis tellus id urna. Nunc eu arcu vitae nisl vehicula tristique. Vivamus eu felis vel turpis dignissim rhoncus. Aenean vitae nibh mi. Maecenas laoreet urna nec pharetra sodales. Sed feugiat ultrices elit, ac volutpat odio tincidunt eu. Mauris vel bibendum purus</p>

                </div>
            </section>
        </div>
    )
}