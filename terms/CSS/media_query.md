# Media Query

In CSS3, a media query is a way of making web pages responsive to different output devices and window dimensions. Media queries allow certain CSS styles to be applied when the output device meets specified conditions.

A media query consists of an optional media type, followed by one or more media expressions.

Media types include `screen`, `print`, `speech`, or `all`.

Media expressions are conditions that evaluate to either true or false.

<pre>
.content {
  margin: 0 auto;
  text-align: center;
}

<span class="highlight">@media screen and (max-width: 680px)</span> {
  .content {
    width: 100%;
  }
}

<span class="highlight">@media screen and (min-width: 681px)</span> {
  .content {
    width: 60%;
  }
}
</pre>