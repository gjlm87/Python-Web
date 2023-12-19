import reflex as rx
from Python_Web.components.link_button import link_button

def links() -> rx.Component:
    return rx.vstack(
        link_button("Youtube", "https://www.youtube.com"),
        link_button("Instagram", "https://www.instagram.com"),
        link_button("X", "https://twitter.com"),
        link_button("Facebook", "https://www.facebook.com?")
   )