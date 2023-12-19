import reflex as rx
from Python_Web.components.link_button import link_button

def links() -> rx.Component:
    return rx.vstack(
        link_button("Youtube"),
        link_button("Instagram"),
        link_button("X"),
        link_button("Facebook")
   )