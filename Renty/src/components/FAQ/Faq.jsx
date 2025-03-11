import React, {useState} from "react";
import { FiPlus, FiX } from 'react-icons/fi';
import "./Faq.css";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How Can I Build Equity Into My House?",
            answer: "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more.",
        },
        {
            question: "How Big Is An Acre?",
            answer: "An acre is 43,560 square feet. It is roughly the size of a football field without the end zones.",
        },
        {
            question: "What Are Closing Costs?",
            answer: "Closing costs are the fees and expenses you pay when you close on a home, including lender fees, title insurance, and taxes.",
        },
        {
            question: "What Is Title Insurance?",
            answer: "Title insurance protects both lenders and buyers from financial loss due to defects in a property title, such as undisclosed liens or ownership disputes.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

	return (
		<div className="FAQ">
			<div className="container">
				<div className="faq-heading">
					<h2>FAQ’s – Frequently Asked Questions</h2>
					<p>
						As you might imagine, real estate agents field quite a
						few questions every day. People are naturally curious,
						and it’s an agent’s job to guide.
					</p>
				</div>
                <div className="question">
                <div className="faq-container">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`faq-item ${
									openIndex === index ? "open" : ""
								}`}
							>
								<div
									className={`faq-question ${
										openIndex === index ? "active" : ""
									}`}
									onClick={() => toggleFAQ(index)}
								>
									<h3>{faq.question}</h3>
									{openIndex === index ? (
										<FiX className="faq-icon" />
									) : (
										<FiPlus className="faq-icon" />
									)}
								</div>
								{openIndex === index && (
									<div className="faq-answer">
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
                </div>
                
			</div>
		</div>
	);
};

export default Faq;
