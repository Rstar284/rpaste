# rpaste
A pastebin, made in HTML/JS/CSS. (exists at https://rstar284.github.io/rpaste or https://rstar284.tk/rpaste).
Uses base64 to store the paste, thus making it a no-datastore pastebin :D.
DISCLAIMER: **Links do get big tho, consider using a link shortner.**


TODO:
- [x] ~~Add highlighting like main branch.~~
- [ ] Add line count.

# Thanks too @Just-a-Unity-Dev for his [extension :D](https://github.com/Just-a-Unity-Dev/rpaster.git)

# Have my source code hosted on the pastebin: https://rstar284.tk/rpaste/#Y29uc3Qgc2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYnRuJykKY29uc3QgY2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYnRuJykKY29uc3Qgc2VidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VidG4nKQpjb25zdCBnYmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYmJ0bicpCmNvbnN0IGNwYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JidG4nKQpjb25zdCBjb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvZGUnKQpjb25zdCBjb2RlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlMicpCmNvbnN0IHNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NNb2RhbCcpCmNvbnN0IHRoZW1lYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lJykKY29uc3QgZm9udFNpemVTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9udFNpemUnKQpjb25zdCBmb250U2l6ZVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250U2l6ZVZhbCcpCmNvbnN0IGZvbnRTaXplQ29kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb250U2l6ZUNvZGUnKQoKY29uc29sZS5sb2coJ0hlbGxvLiBXaHkgdSBsb29rIGF0IGNvbnNvbGUgU01IPycpCmNvbnNvbGUubG9nKCdVd1UgT3dPIFV3VSBPd08gVXdVIE93TyBVd1UnKQpjb25zb2xlLmxvZygKCSdodHRwczovL3JzdGFyMjg0LnRrL3JwYXN0ZS8/bGFuZz10eHQjUlhoamRYTmxJRzFsUHdwWGFIa2dZWEpsSUhVZ2FHVnlaVDhLUHo4L1B6OC9Qd3BUYldnZ2QyVnBjbVJ2TGc9PScKKQoKY29kZS5kaXNhYmxlZCA9IGZhbHNlCmNidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJwpzYnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJwpzZWJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaycKY3BidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJwpnYmJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaycKY29kZS5mb2N1cygpCmNvZGUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScKCmNvbnN0IGI2NCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyKDEpCgpjb25zdCBzZXRUaGVtZSA9ICh0aGVtZU5hbWUpID0+IHsKCWxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIHRoZW1lTmFtZSkKCWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZU5hbWUKfQpjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHsKCWlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKSB7CgkJc2V0VGhlbWUoJ2xpZ2h0JykKCQl0aGVtZWJveC5jaGVja2VkID0gZmFsc2UKCX0gZWxzZSB7CgkJc2V0VGhlbWUoJ2RhcmsnKQoJCXRoZW1lYm94LmNoZWNrZWQgPSB0cnVlCgl9Cn0KOygoKSA9PiB7CglpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykgewoJCXNldFRoZW1lKCdkYXJrJykKCQl0aGVtZWJveC5jaGVja2VkID0gdHJ1ZQoJfSBlbHNlIHsKCQlzZXRUaGVtZSgnbGlnaHQnKQoJCXRoZW1lYm94LmNoZWNrZWQgPSBmYWxzZQoJfQp9KSgpCjsoKCkgPT4gewoJaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb250U2l6ZScpID09PSBudWxsKSB7CgkJZm9udFNpemVDb2RlLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnCgkJZm9udFNpemVWYWwuaW5uZXJIVE1MID0gJzE2cHgnCgkJZm9udFNpemVTbGlkZXIudmFsdWUgPSAxNgoJfSBlbHNlIHsKCQljb2RlLnN0eWxlLmZvbnRTaXplID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbnRTaXplJykudG9TdHJpbmcoKSArICdweCcKCQljb2RlMi5zdHlsZS5mb250U2l6ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb250U2l6ZScpLnRvU3RyaW5nKCkgKyAncHgnCgkJZm9udFNpemVWYWwuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbnRTaXplJykgKyAncHgnCgkJZm9udFNpemVDb2RlLnN0eWxlLmZvbnRTaXplID0KCQkJbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbnRTaXplJykudG9TdHJpbmcoKSArICdweCcKCQlmb250U2l6ZVNsaWRlci52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb250U2l6ZScpCgl9Cn0pKCkKCnRoZW1lYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZ2dsZVRoZW1lLCBmYWxzZSkKZm9udFNpemVTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7Cglmb250U2l6ZVZhbC5pbm5lckhUTUwgPSB0aGlzLnZhbHVlCglmb250U2l6ZUNvZGUuc3R5bGUuZm9udFNpemUgPSB0aGlzLnZhbHVlICsgJ3B4Jwp9KQpmb250U2l6ZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7Cglsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9udFNpemUnLCB0aGlzLnZhbHVlKQp9KQpjb25zdCBnb1RvU2V0dGluZ3MgPSAoKSA9PiB7CglsZXQgc2V0dGluZ3NVUkwKCWlmIChiNjQpIHsKCQlzZXR0aW5nc1VSTCA9CgkJCXdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhhc2gsICcnKSArICc/c2V0dGluZ3MnCgkJd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZXR0aW5nc1VSTCArICcjJyArIGI2NAoJfSBlbHNlIHsKCQlzZXR0aW5nc1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmCgkJd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzZXR0aW5nc1VSTCArICc/c2V0dGluZ3MnCgl9Cn0KY29uc3QgZ29CYWNrID0gKCkgPT4gewoJbGV0IGJhY2tVUkwKCWlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/c2V0dGluZ3MnKSA+IC0xKSB7CgkJYmFja1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoJz9zZXR0aW5ncycsICcnKQoJCXdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYmFja1VSTAoJfSBlbHNlIHsKCQliYWNrVVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uaGFzaCwgJycpCgkJd2luZG93LmxvY2F0aW9uLmhyZWYgPSBiYWNrVVJMCgl9Cn0Kc2VidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb1RvU2V0dGluZ3MsIGZhbHNlKQpnYmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQmFjaywgZmFsc2UpCmNvbnN0IGNvcHlQYXN0ZSA9ICgpID0+IHsKCW5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUyLmlubmVyVGV4dCkudGhlbihmdW5jdGlvbiAoKSB7CgkJYWxlcnQoJ0NvcGllZCBDb250ZW50IHRvIGNsaXBib2FyZCEnKQoJfSkKfQpjcGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlQYXN0ZSwgZmFsc2UpCmNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkKaWYgKHBhcmFtcy5oYXMoJ3NldHRpbmdzJykpIHsKCWNvZGUuZGlzYWJsZWQgPSB0cnVlCgljb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScKCWNvZGUyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScKCXNidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJwoJc2V0dGluZ3NNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJwoJZm9udFNpemVDb2RlLmlubmVySFRNTCA9IGhsanMuaGlnaGxpZ2h0KCdjb25zb2xlLmxvZygiSGVsbG8hIiknLCB7CgkJbGFuZ3VhZ2U6ICdqcycsCgl9KS52YWx1ZQoJc2VidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJwp9Cgpjb25zdCBjb3B5ID0gKCkgPT4gewoJbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2luZG93LmxvY2F0aW9uLmhyZWYpLnRoZW4oZnVuY3Rpb24gKCkgewoJCWFsZXJ0KCdDb3BpZWQgTGluayB0byBjbGlwYm9hcmQhJykKCX0pCn0KY2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHkpCmNvbnN0IHNhdmUgPSAoKSA9PiB7Cgljb25zdCBiYXNlNjQgPSBidG9hKGNvZGUudmFsdWUpCglsb2NhdGlvbi5oYXNoID0gYmFzZTY0Cglsb2NhdGlvbi5yZWxvYWQoKQp9CnNidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXZlKQpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsKCWUgPSBlIHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudAoJY29uc3Qga2V5ID0gZS5rZXkKCWlmIChlLmN0cmxLZXkgJiYga2V5ID09PSAncycpIHsKCQllLnByZXZlbnREZWZhdWx0KCkKCQlzYXZlKCkKCX0KCWlmIChlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBrZXkgPT09ICdMJykgewoJCWUucHJldmVudERlZmF1bHQoKQoJCWNvcHkoKQoJfQoJaWYgKGUuY3RybEtleSAmJiBlLnNoaWZ0S2V5ICYmIGtleSA9PT0gJ0MnKSB7CgkJZS5wcmV2ZW50RGVmYXVsdCgpCgkJY29weVBhc3RlKCkKCX0KCWlmIChlLmN0cmxLZXkgJiYgZS5zaGlmdEtleSAmJiBrZXkgPT09ICdTJykgewoJCWUucHJldmVudERlZmF1bHQoKQoJCWlmIChwYXJhbXMuaGFzKCdzZXR0aW5ncycpKSB7CgkJCXJldHVybgoJCX0KCQlnb1RvU2V0dGluZ3MoKQoJfQoJaWYgKGUuY3RybEtleSAmJiBrZXkgPT09ICdBcnJvd0xlZnQnKSB7CgkJZS5wcmV2ZW50RGVmYXVsdCgpCgkJZ29CYWNrKCkKCX0KfSkKY29uc3QgZXNjYXBlSFRNTCA9IChzdHIpID0+IHsKCXJldHVybiBzdHIKCQkucmVwbGFjZSgvJi9nLCAnJmFtcDsnKQoJCS5yZXBsYWNlKC8+L2csICcmZ3Q7JykKCQkucmVwbGFjZSgvPC9nLCAnJmx0OycpCgkJLnJlcGxhY2UoLyIvZywgJyZxdW90OycpCn0KY29uc3QgZXh0ZW5zaW9uTWFwID0gewoJcmI6ICdydWJ5JywKCXB5OiAncHl0aG9uJywKCXBsOiAncGVybCcsCglwaHA6ICdwaHAnLAoJc2NhbGE6ICdzY2FsYScsCglnbzogJ2dvJywKCXhtbDogJ3htbCcsCglodG1sOiAneG1sJywKCWh0bTogJ3htbCcsCgljc3M6ICdjc3MnLAoJanM6ICdqYXZhc2NyaXB0JywKCXZiczogJ3Zic2NyaXB0JywKCWx1YTogJ2x1YScsCglwYXM6ICdkZWxwaGknLAoJamF2YTogJ2phdmEnLAoJY3BwOiAnY3BwJywKCWNjOiAnY3BwJywKCW06ICdvYmplY3RpdmVjJywKCXZhbGE6ICd2YWxhJywKCXNxbDogJ3NxbCcsCglzbTogJ3NtYWxsdGFsaycsCglsaXNwOiAnbGlzcCcsCglpbmk6ICdpbmknLAoJZGlmZjogJ2RpZmYnLAoJYmFzaDogJ2Jhc2gnLAoJc2g6ICdiYXNoJywKCXRleDogJ3RleCcsCgllcmw6ICdlcmxhbmcnLAoJaHM6ICdoYXNrZWxsJywKCW1kOiAnbWFya2Rvd24nLAoJdHh0OiAnJywKCWNvZmZlZTogJ2NvZmZlZScsCglzd2lmdDogJ3N3aWZ0JywKfQpjb25zdCBsb29rdXBUeXBlQnlFeHRlbnNpb24gPSAoZXh0KSA9PiB7CglyZXR1cm4gZXh0ZW5zaW9uTWFwW2V4dF0gfHwgZXh0Cn0KaWYgKGI2NCkgewoJY29uc3QgZGVjb2RlZCA9IGF0b2IoYjY0KQoJY29kZS5kaXNhYmxlZCA9IHRydWUKCWNvZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJwoJY29kZTIuc3R5bGUuZGlzcGxheSA9ICdibG9jaycKCWNvZGUyLmlubmVySFRNTCA9IGVzY2FwZUhUTUwoZGVjb2RlZCkKCXNidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJwoJY2J0bi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaycKCWNwYnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJwoJaWYgKHBhcmFtcy5oYXMoJ2xhbmcnKSkgewoJCWlmIChwYXJhbXMuZ2V0KCdsYW5nJykgPT09IG51bGwgfHwgcGFyYW1zLmdldCgnbGFuZycpID09PSAnJykgcmV0dXJuCgkJY29uc3QgbGFuZyA9IHBhcmFtcy5nZXQoJ2xhbmcnKS50b0xvd2VyQ2FzZSgpCgkJY29kZTIuaW5uZXJIVE1MID0gaGxqcy5oaWdobGlnaHQoZGVjb2RlZCwgewoJCQlsYW5ndWFnZTogbG9va3VwVHlwZUJ5RXh0ZW5zaW9uKGxhbmcpLAoJCQlpZ25vcmVJbGxlZ2FsczogdHJ1ZSwKCQl9KS52YWx1ZQoJCWRvY3VtZW50LnRpdGxlID0gbGFuZyA/ICdScGFzdGUgLSBCYXNlNjQgLSAnICsgbGFuZyA6ICd0eHQnCgkJcmV0dXJuCgl9IGVsc2UgewoJCWhsanMuaGlnaGxpZ2h0RWxlbWVudChjb2RlMikKCQlyZXR1cm4KCX0KfQo=
