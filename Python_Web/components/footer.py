import reflex as rx

def footer() -> rx.Component:
    return rx.vstack(
        rx.images(src="favicon.ico")
    )