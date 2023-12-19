import reflex as rx
from Python_Web.components.navbar import navbar
from Python_Web.components.footer import footer
from Python_Web.views.header.header import header
from Python_Web.views.links.links import links
import Python_Web.styles.styles as styles


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Spacer.BIG.value
            ),
        ),
        footer()

    )


app = rx.App()
app.add_page(index)
app.compile()
