import reflex as rx

def header() -> rx.Component:
    return rx.vstack (
        rx.avatar(name="Gerald Lopez", size="xl")
    )
