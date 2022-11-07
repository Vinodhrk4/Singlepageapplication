import React from "react";
import image from "./doctor1.jpg";
import image1 from "./doctor2.jpg";
const About=()=>{
    return(
        <>
        <div className="doctor1">
        <div className="modern">
            <img src={image} height="400px" width="400px" alt=""></img></div>
            <div className="Paragraph">
            <p><b>
                If you work in medicine, does it matter if you are called by your title? Is it all right if patients, colleagues<br/>

However, for many doctors who are women, that is not necessarily the central concern.<br/>
 
It is more worrying that they and their male counterparts receive different forms of address.<br/>

 Women are more often referred to by first name, even when the situation of communication is formal.<br/>

The same does not happen to doctors who are men.<br/>

Women in medicine may wonder whether or not those variations in how they are addressed might have far-reaching consequences for their careers.<br/>

As a linguist, writer, and professor who teaches mostly sociolinguistics content, I have always been fascinated by the ways in which we use language.<br/>

 Linguistic categories and beliefs can affect different areas of our lives.<br/>

When my colleagues and I became curious about the use of titles, we conducted a study.<br/>

 It is part of a number of efforts by researchers interested in the social aspects of gender in medical fields.<br/>

Our study shows that women are indeed less often called “doctor” than their male equivalent, and by a large margin.<br/>

Informal feedback by online readers reveals that the practice leads to concerns about everything from career advancement to professional respect.</b></p>
      </div>
        </div><br/>

        <div className="doctor2">
        <img src={image1} height="400px" width="400px" alt=""></img>
        <div className="paragraph">
        <p><b>
One of the rewards of being a linguist is to see the possible applications of the research in the real world.<br/>
        
 Work on forms of address, for example, has changed institutional policy.<br/>

It is vital that we accept as valid the point of view of women who are concerned about these behaviors and are affected by them.<br/>

Opportunity exists for those who might not be directed impacted to be allies and to model behavior themselves.<br/>

One area that lacks research and inclusion is gender bias beyond the male-female binary.<br/>

That is, we urgently need to find out how gender bias, in language and elsewhere, affects medical professionals who identify as nonbinary, genderqueer, and transgender.<br/>
 
Additionally, intersectionality requires further consideration as it influences advancement and opportunity.<br/>

Intersectionality refers to overlapping systems of discrimination that affect a person in complicated ways. <br/>

For example, being all at once a woman, a member of an ethnic minority and a participant of a given religious practice might mean facing discrimination that is compounded by these multiple memberships.<br/>

 It should not happen, but it does.</b>
        </p>
        </div>
        </div>
        
        </>
    )
}
export default About;