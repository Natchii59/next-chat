interface HTMLProps {
  actionUrl: string
}

export function SignInHtml({ actionUrl }: HTMLProps) {
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff'
  }

  return `
<body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td
        align="center"
        style="padding-top: 10px; font-size: 16px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};"
      >
        <h2>Hey 👋,</h2>
        <p>Click the link below to sign in to your account.</p>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 10px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td
              align="center"
              style="border-radius: 5px;"
              bgcolor="#346df1"
            >
              <a
                href="${actionUrl}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: #fff; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid #fff; display: inline-block; font-weight: bold;"
              >
                Sign in
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        align="center"
        style="padding-bottom: 10px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};"
      >
        <p>This link expires in 2 hours and can only be used once.</p>
        <p>If you did not try to log into your account, you can safely ignore it.</p>
      </td>
    </tr>
  </table>
</body>
`
}

export function SignInText({ actionUrl }: HTMLProps) {
  return `
Hey 👋,

Click the link below to sign in to your account.

Sign In ( ${actionUrl} )

This link expires in 24 hours and can only be used once.
If you did not try to log into your account, you can safely ignore it.

If you’re having trouble with the button above, copy and paste the URL below into your web browser.

${actionUrl}
`
}
