import React, { Component } from "react";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="contact_section">
                <div className="container">
                    <h1 className="contact_header">Contact</h1>
                    <div className="contact_header_underline"></div>
                    {/* {% if sent %}
                        <p className="contact_prompt">Thank you! Your message has been sent.</p>
                    {% else %} */}
                        <p className="contact_prompt">Have a question?</p>
                        <form className="contact_form" id="contact_form" name="contact_form" action="/#contact_section" method="post">
                            {/* {% csrf_token %}
                            {{ contact_form.management_form }}
                            {% for field in contact_form %}
                                {{ field }}
                            {% endfor %} */}
                            <input className="contact_submit" type="submit" value="SUBMIT" />
                        </form>
                    {/* {% endif %} */}
                </div>
            </section>
        );
    }
}