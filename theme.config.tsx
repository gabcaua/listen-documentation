import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config = {
  /* Head
  SEO Optimization: Part One */
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://www.guide.listen.cgsilva.com.br" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        {/* Primary Meta Tags */}
        
        <meta
          name="title"
          content={frontMatter.title || "Listen Official Guide"}
        />
        <meta
          name="description"
          content="Official documentation and tutorials for Listen. Learn how to set up and use Listen for your server. Get help with features, commands, and more."
        />
        <meta
          name="keywords"
          content="listen, discord bot, documentation, guide, tutorials"
        />

        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="your-google-site-verification-code"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta
          property="og:title"
          content={frontMatter.title || "Listen Official Guide"}
        />
        <meta
          property="og:description"
          content="Official documentation and tutorials for Listen. Learn how to set up and use Listen for your server. Get help with features, commands, and more."
        />
        <meta property="og:image" content="/open-graph-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta
          property="twitter:title"
          content={frontMatter.title || "Listen Official Guide"}
        />
        <meta
          property="twitter:description"
          content="Official documentation and tutorials for Listen. Learn how to set up and use Listen for your server. Get help with features, commands, and more."
        />
        <meta property="twitter:image" content="/twitter-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="favicon" href="/favicon.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />
      </>
    );
  },

  /* SEO Optimization: Part Two */

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Listen Official Guide",
    };
  },

  chat: {
    link: "https://discord.gg/Ka9jGb2ZkA",
  },

  /* Kinda morbid, less frequency sensible code by design: */

  docsRepositoryBase: "https://github.com/gabcaua/listen-documentation",

  banner: {
    text: "🎉  The next update of Listen is coming soon."
  },

  feedback: {
    content: null,
  },

  editLink: {
    text: null,
    component: null,
  },

  search: {
    placeholder: "What do you need help with?",
  },

  primaryHue: {
    dark: 250,
    light: 250,
  },
  primarySaturation: {
    dark: 95,
    light: 100,
  },

  footer: {
    text: (
      <p>
        Discover. Play. Listen.
        <br />
        Made with ❤︎ by Cauã Gabriel.
        <br />
        <br />© {new Date().getFullYear()} The Listen Project.
      </p>
    ),
  },

  logo: (
    <>
      <svg
        width="115"
        viewBox="0 0 902 203"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 136.512L148 0L278.948 116.663L353.846 26.4365L400 65.0469L282 202.49L148 83.7461L40.4132 181.139L0 136.512Z"
          fill="currentColor"
        />
        <path
          d="M448 164.108V40.1006H470.172V145.46H526.375V164.108H448Z"
          fill="currentColor"
        />
        <path
          d="M540.812 164.108V73.0146H562.211V164.108H540.812ZM551.469 59.9521C548.146 59.9521 545.339 58.8063 543.047 56.5146C540.755 54.223 539.609 51.473 539.609 48.2646C539.609 44.999 540.755 42.249 543.047 40.0146C545.339 37.723 548.146 36.5771 551.469 36.5771C554.849 36.5771 557.685 37.723 559.977 40.0146C562.268 42.249 563.414 44.999 563.414 48.2646C563.414 51.473 562.268 54.223 559.977 56.5146C557.685 58.8063 554.849 59.9521 551.469 59.9521Z"
          fill="currentColor"
        />
        <path
          d="M616.008 165.913C608.044 165.913 601.227 164.739 595.555 162.39C589.94 160.041 585.529 156.746 582.32 152.507C579.169 148.21 577.25 143.254 576.562 137.64L576.477 136.866H597.531L597.703 137.64C598.505 141.593 600.396 144.658 603.375 146.835C606.411 149.012 610.651 150.101 616.094 150.101C619.589 150.101 622.568 149.671 625.031 148.812C627.495 147.952 629.385 146.692 630.703 145.03C632.078 143.369 632.766 141.421 632.766 139.187V139.101C632.766 136.408 631.849 134.231 630.016 132.569C628.182 130.851 624.888 129.447 620.133 128.358L605.008 125.007C599.221 123.689 594.38 121.884 590.484 119.593C586.589 117.301 583.667 114.465 581.719 111.085C579.771 107.647 578.797 103.666 578.797 99.1396V99.0537C578.797 93.4964 580.315 88.6266 583.352 84.4443C586.388 80.262 590.656 76.9964 596.156 74.6475C601.656 72.2985 608.044 71.124 615.32 71.124C622.883 71.124 629.357 72.3844 634.742 74.9053C640.128 77.4261 644.281 80.8063 647.203 85.0459C650.182 89.2855 651.786 94.0407 652.016 99.3115L652.102 100.257H632.164L632.078 99.5693C631.62 95.9027 629.958 92.8949 627.094 90.5459C624.229 88.1396 620.305 86.9365 615.32 86.9365C612.169 86.9365 609.419 87.3949 607.07 88.3115C604.779 89.2282 603.003 90.5173 601.742 92.1787C600.539 93.8402 599.938 95.7881 599.938 98.0225V98.1084C599.938 99.8271 600.367 101.374 601.227 102.749C602.086 104.124 603.461 105.327 605.352 106.358C607.242 107.332 609.763 108.192 612.914 108.937L628.039 112.288C637.492 114.408 644.224 117.444 648.234 121.397C652.245 125.293 654.25 130.535 654.25 137.124V137.21C654.25 142.939 652.617 147.981 649.352 152.335C646.086 156.632 641.56 159.983 635.773 162.39C630.044 164.739 623.456 165.913 616.008 165.913Z"
          fill="currentColor"
        />
        <path
          d="M701.688 165.913C692.234 165.913 685.188 163.851 680.547 159.726C675.964 155.601 673.672 148.84 673.672 139.444V89.5146H660.781V73.0146H673.672V49.8975H695.414V73.0146H712.344V89.5146H695.414V137.726C695.414 142.137 696.388 145.202 698.336 146.921C700.341 148.582 703.263 149.413 707.102 149.413C708.19 149.413 709.135 149.384 709.938 149.327C710.797 149.213 711.599 149.127 712.344 149.069V165.14C711.083 165.312 709.536 165.483 707.703 165.655C705.927 165.827 703.922 165.913 701.688 165.913Z"
          fill="currentColor"
        />
        <path
          d="M765.367 165.913C756.258 165.913 748.409 163.994 741.82 160.155C735.289 156.317 730.276 150.874 726.781 143.827C723.286 136.78 721.539 128.444 721.539 118.819V118.733C721.539 109.166 723.286 100.83 726.781 93.7256C730.333 86.5641 735.289 81.0068 741.648 77.0537C748.065 73.1006 755.628 71.124 764.336 71.124C772.987 71.124 780.464 73.0433 786.766 76.8818C793.125 80.6631 797.995 85.9912 801.375 92.8662C804.812 99.7412 806.531 107.762 806.531 116.929V123.804H732.109V109.538H796.305L785.992 122.858V114.608C785.992 108.65 785.076 103.694 783.242 99.7412C781.409 95.7881 778.888 92.8376 775.68 90.8896C772.471 88.8844 768.776 87.8818 764.594 87.8818C760.354 87.8818 756.573 88.9131 753.25 90.9756C749.984 92.9808 747.406 95.9886 745.516 99.999C743.682 104.009 742.766 108.879 742.766 114.608V122.858C742.766 128.416 743.682 133.171 745.516 137.124C747.406 141.02 750.07 144.028 753.508 146.147C756.945 148.21 761.042 149.241 765.797 149.241C769.349 149.241 772.471 148.697 775.164 147.608C777.857 146.463 780.062 145.002 781.781 143.226C783.557 141.45 784.789 139.53 785.477 137.468L785.648 136.866H805.586L805.414 137.812C804.669 141.306 803.294 144.744 801.289 148.124C799.284 151.447 796.591 154.455 793.211 157.147C789.831 159.84 785.82 161.989 781.18 163.593C776.539 165.14 771.268 165.913 765.367 165.913Z"
          fill="currentColor"
        />
        <path
          d="M820.195 164.108V73.0146H841.508V87.2803H842.023C844.372 82.3532 847.867 78.4287 852.508 75.5068C857.206 72.585 862.992 71.124 869.867 71.124C879.893 71.124 887.628 74.1605 893.07 80.2334C898.57 86.3063 901.32 94.6136 901.32 105.155V164.108H879.922V109.452C879.922 102.978 878.404 97.9938 875.367 94.499C872.331 90.9469 867.776 89.1709 861.703 89.1709C857.635 89.1709 854.083 90.1162 851.047 92.0068C848.01 93.8402 845.661 96.4183 844 99.7412C842.339 103.007 841.508 106.845 841.508 111.257V164.108H820.195Z"
          fill="currentColor"
        />

        <style jsx>{`
          svg {
            mask-image: linear-gradient(
              60deg,
              black 25%,
              rgba(0, 0, 0, 0.2) 50%,
              black 75%
            );
            mask-size: 380%;
            mask-position: 0%;
            transition: mask-position 1s ease, -webkit-mask-position 1s ease;
          }
          svg:hover {
            mask-position: 100%;
            transition: mask-position 1s ease, -webkit-mask-position 1s ease;
          }
          svg: ;
        `}</style>
      </svg>

      {/* <span
        style={{
          marginLeft: ".4em",
          fontWeight: 600,
          fontSize: "1.4em",
          // If theme is Light, color will be black. If theme is Dark, color will be white
          color: "currentColor",
        }}
      >
        Listen </span>
        */}
    </>
  ),
  toc: {
    backToTop: true,
  },
};

export default config;
