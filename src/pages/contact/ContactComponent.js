import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <section className="contact-hero-card">
              <div className="contact-heading-img-div contact-profile-shell">
                <img
                  className="contact-profile-image"
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Profile"
                />
              </div>
              <div className="contact-heading-text-div contact-hero-content">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <p className="contact-quick-meta" style={{ color: theme.text }}>
                  {addressSection["locality"]}, {addressSection["region"]},{" "}
                  {addressSection["country"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="contact-cta-row">
                  <Button
                    text="See My Resume"
                    href="/resume"
                    theme={theme}
                  />
                  <Button
                    text="Open Map"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </section>
          </Fade>

          <Fade bottom duration={1000} distance="40px">
            <section className="contact-info-grid">
              <article className="contact-info-card" style={{ borderColor: theme.highlight }}>
                <div className="contact-card-icon">
                  <BlogsImg theme={theme} />
                </div>
                <h2 className="address-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h2>
                <p className="blog-header-detail-text" style={{ color: theme.secondaryText }}>
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blog"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </article>

              <article className="contact-info-card" style={{ borderColor: theme.highlight }}>
                <div className="contact-card-icon">
                  <AddressImg theme={theme} />
                </div>
                <h2 className="address-heading-text" style={{ color: theme.text }}>
                  {addressSection["title"]}
                </h2>
                <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
                  {addressSection["subtitle"]}
                </p>

                {phoneSection["title"] ? (
                  <h2 className="address-heading-text" style={{ color: theme.text }}>
                    {phoneSection["title"]}
                  </h2>
                ) : null}

                {phoneSection["subtitle"] ? (
                  <p
                    className="contact-header-detail-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {phoneSection["subtitle"]}
                  </p>
                ) : null}

                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </article>
            </section>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
