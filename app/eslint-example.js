const ESLintExamples = () => {
  return (
    <div>
      {/* aria-prop */}
      {/* <!-- Good: Labeled using correctly spelled aria-labelledby --> */}
      <div id="address_label">Enter your address</div>
      <input aria-labelledby="address_label"></input>

      {/* <!-- Bad: Labeled using incorrectly spelled aria-labeledby --> */}
      <div id="address_label">Enter your address</div>
      <input aria-labeledby="address_label"></input>

      {/* aria-proptypes */}
      {/* <!-- Good: the aria-hidden state is of type true/false --> */}
      <span aria-hidden="true">foo</span>

      {/* <!-- Bad: the aria-hidden state is of type true/false --> */}
      <span aria-hidden="yes">foo</span>

      {/* aria-unsupported-elements */}
      {/* <!-- Good: the meta element should not be given any ARIA attributes --> */}
      <meta charset="UTF-8" />

      {/* Fail */}
      <meta charset="UTF-8" aria-hidden="false" />

      {/* role-has-required-aria-props */}
      {/* <!-- Good: the checkbox role requires the aria-checked state --> */}
      <span
        role="checkbox"
        aria-checked="false"
        aria-labelledby="foo"
        tabindex="0"
      ></span>

      {/* <!-- Bad: the checkbox role requires the aria-checked state --> */}
      <span role="checkbox" aria-labelledby="foo" tabindex="0"></span>

      {/* role-supports-aria-props */}
      {/* <!-- Good: the radiogroup role does support the aria-required property --> */}
      <ul role="radiogroup" aria-required aria-labelledby="foo">
        <li tabIndex="-1" role="radio" aria-checked="false">
          Rainbow Trout
        </li>
        <li tabIndex="-1" role="radio" aria-checked="false">
          Brook Trout
        </li>
        <li tabIndex="0" role="radio" aria-checked="true">
          Lake Trout
        </li>
      </ul>

      {/* <!-- Bad: the radio role does not support the aria-required property --> */}
      <ul role="radiogroup" aria-labelledby="foo">
        <li aria-required tabIndex="-1" role="radio" aria-checked="false">
          Rainbow Trout
        </li>
        <li aria-required tabIndex="-1" role="radio" aria-checked="false">
          Brook Trout
        </li>
        <li aria-required tabIndex="0" role="radio" aria-checked="true">
          Lake Trout
        </li>
      </ul>
    </div>
  );
};
