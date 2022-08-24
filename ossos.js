function tumba() {
    var hora = window.document.querySelector("input#hora")
    var hrFinal = Number(hora.value)
    var ver = window.document.querySelector("input#ver")
    var res1 = window.document.querySelector("div#res1")
    var res2 = window.document.querySelector("div#res2")
    var img = window.document.querySelector("img#image")


    if (hrFinal == 1 || hrFinal == 13) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        img.src = "https://previews.dropbox.com/p/thumb/ABjbXXIvbjnIK5vSz5wvWGCKuvTWNVOrq2Z9NwM3umIG-xne1T6SE0BbqaSArS7Z0stQ-Hxz810SiRtrNVNNe4vUajypRs5SpwgMpXeMknDadLXL8vYMYH7cmjCva6q1QVZAQM53R697hirqjZKUqLIM_3gJCCQMi1QRVuSg91voZDSd-701DaGnVcQ-RRNqcEocAvRUU1T8H7hqM0D8sUybu6-HF_3lOl24sFNkCngdNhMOzgxgPM930jxRFkVjcstTyrPywhhH6xNaqbWvnV44925MYa8LjQR2NznudblXWAAM-cYzlzi7SiBHftvFHS4jlZWsmEsy_BiRrLZhCdCPpHiv9uIEHlC0WgW0tVWRg2cJdxdqjv9I6tuNqs9LTww/p.png"
        res2.innerHTML = `Todas as caveiras saem da tumba`
        
    } else if (hrFinal == 2 || hrFinal == 14) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras pintam as unhas`
        img.src = "https://previews.dropbox.com/p/thumb/ABhYGcwCsHKgqenezCXqsOj-Pbj8X949YKcLGb-ZOoSAQ3Jo-shuHTcbsfgb0EHuzxzTRLKHQ02-45yGBXjaM69ANf6oh9ko8FqPdRmhWbSvLukxJdb2sTk9aJH5kda7xNkIV7DW0pTdOwNgRPNu_hHJTommB1iHcJCE9wYO9tpwMtwUsTY07oZ0aCJz4XCF5Wh7DtkGtXfah3edK9AIjIwGan38rEvcViNp4Ma0JN6Tg5VDbUDsXOhrb7xBPkLPXybu_N7Fcu0bplanqc5RN_sjyf3FhDiUZoNRrLa6TwFJe8kXu3VSsqIi1AJ5Nzx6O3sgSKYuZRJrXdogWOrToWhVUTY6QpUvcnpgBXHxkDzFg8Fl-ubqgNTj1qffXKAFnQQ/p.png"
    } else if (hrFinal == 3 || hrFinal == 15) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras imitam chinês`
        img.src = "https://previews.dropbox.com/p/thumb/ABgU7hS1biaJrXhmb8koweST-xRfOANcNTKO0sC6TGBZTzfKIFhCZF1_4r9GMdeIWXcQes1ubWs3TfQl4JHER6qxh4jev40p-Di17dj7ObkzAJR5X8I_Sg-OXJ4jwy9gB-xrYKOxtIYVjqjxi_2vL2HmHf8JZfXH9iVrrppoMM2IEcyukiE7fejMNSpuVj1XjqeSrn5sQ4KDgqyrztbE9F6Yw9sHB_cBFfzFOH2I9sIQ_eXds_OQ6uBIDwEoKwMjojnbuAGFK1ifhUfK0-WboQhbK8iF87MuvAPQfcDtTTkFTa6_GBujAxYdq15BNCpbCysrqm_Qh6_XUlalhRcKaTAc7Ag35x5XNibFUsadg6GdT_Vep49AbVQzvkV75-aJS94/p.png"
    } else if (hrFinal == 4 || hrFinal == 16) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras tiram retrato`
        img.src = "https://previews.dropbox.com/p/thumb/ABjyTyMNj7ABNgaNqaWrind9mP1G_k_5Ty-YZfSINhUAsQzHqnL15nwWp9e0m7pd7c_QEDAm0lhzpufmi4QEER-Juoqdz0PKkEZXZMhOAxw4cnKy_erIHKQV-VLrUC1VjGtU9V-D92mKoIrIANUh8FxbHWXfYBTcsgauaD8SQpudqoTK0osgKhV99aMd2svnxVmEWDerCEn9OzeL5PEiPOerrLGoi0DVXo25KUcICC9N1qFoVBFt-iKA_zMnetOT2dDuRcH_Q0u65LR5-hs5Px5OB_ubZwUZJnNSE2-kQdU0LOFcR9oqMjAvokOWVIe2X9u4eo9LXNtKVvhCkJvmcG2BjPrKrXd456oe9By7pOAGORzJdhyPjs1h0iypDbT52TE/p.png"
    } else if (hrFinal == 5 || hrFinal == 17) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras apertam o cinto`
        img.src = "https://previews.dropbox.com/p/thumb/ABiy_YS6uc9Dft0NxiCLki8Pdx4sdLBiFbGj8PtU52rJTqpnCIEApXXVvwW0QBE13ZvdgJP88Fc0BJ67RprXgFUh6TNzo55IVvggcNHdeAqgbtxyS8D2CHEF9MSJAqOWuBZqZn5Y8izu0x-Ejw1rd7CRCUe1IVkLjY2wGuXSV8OIenOZ4YlwsqgcbFyPirqHVNmf_3czcSnXTr2diHTZt3HM8UmoBQLJZwwQwjxrPymaKafOCCHNmnCJLjH5I-okl4Qf4u9gFPVdoi5UJCbwhmeggYo48wJNF_Ru1SWS2trooxqqTkcA6WzU_dFdvZ3gfv_fptQb7WdhIUGsyFf4WCWRRfYbxtLCO2824-EKI9Oe0SHz56HSrbDxZoflXzEjFps/p.png"
    } else if (hrFinal == 6 || hrFinal == 18) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras jogam xadrez`
        img.src = "https://previews.dropbox.com/p/thumb/ABji4lgUv8gl32UvqjVCkWSD3fKLaBs171MMiT8HATiH-yM2fN_GeZhffqv75nCgN-BKNHiXgk7VpgWm1RPB3KJY8uVJLqtY_F3ZUgKVTmPoFrlO3qy5mNHuGyNr0prUEt8u5b7Jz7ML53lx7qLklwaTLVHXrQL5BTa2jxFYTRKmilo2OjTVXFaPodS06LH8H1qiHkUw6RwQw39y0xGkGIy7oR2FoGY_7Uo6Hfbpzj7MusyS6mEYUGrt2wRhXpJW_P3jJa__tc3bdXK2MUgwU78Rr5_GKeYWySHvI06fUnAuObl60cB229TSgy4S-IWJcT8JSZ_gM9vkL4SAd0cqD2RlpZ4KmHw0Kq5dsR8fHGctt0mwv32vcHZD4MlUFZeALhQ/p.png"
    } else if (hrFinal == 7 || hrFinal == 19) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras jogam basquete`
        img.src = "https://previews.dropbox.com/p/thumb/ABiNVEc38bVXUjQ_MDBgalpM9lkwH0JXmLHQpPdH5RSIwmayByPm__QnQ1Xl-7I_o9LxsNKDPvSX8264B0rP3w21zZvSRsCllkFa9eaScAsp9j78adlf-SATwM6eV3eAw1t7_AAQqnEEn67S0EF4IaOk8d0cj0Qmb3x2J4NqzcUpPD4BjFZd-7tzuQUhlvvHQm_GFMuVkExRAG5oHNRcf2_TI8xIC45OJ_WFgfQUV0XqWkZ6vYKNX5RxQ8gLI73DmFaE1gG_qOno3qgwZCpFBQp3Alo3IBMWZR5YibswaKrsvnWpMu8WcjYj20OwpYOGbhXmFihdzInwaCjViHWEZluPvVQpswGsy_KWwuDQCbQolws9IyOIz4B6tyy8Y3Ep4OI/p.png"
    } else if (hrFinal == 8 || hrFinal == 20) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras comem biscoito`
        img.src = "https://previews.dropbox.com/p/thumb/ABht8vibEpELaMVII50wxiyGUjjZSFET90fKrLFAvaEU9S1Z12rrAf0dA1Yvjz0dUGlXu405tVMeFmFVwna5hQA7-s7ApOktjrMHw5If0e4HZDk8vAdGzB-fy9F5fZxZox45YS7v8mHImBbutz3A9_F7Ix44-Bb8U5zdr8dxHm4xyVGcychL8IpGazViyQUGMf_tGh-l0PBbYe0sedIJdtnoECvYkYqMXYXsCiybaZ87PRp3qUnw_b7GeEdAC6H9ud7g8kK3VvuhbIeb_qBRn88JYBBLtR3VJpM33irkwXy4WClBi4LMuivL0817-RwruK3qROBbk1NqjQNj_a-iEEiuYJJRTmZcBfqg3qOsp9JA1eVKlTDxJCFdag_BPqTNQgY/p.png"
    } else if (hrFinal == 9 || hrFinal == 21) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras se sacodem`
        img.src = "https://previews.dropbox.com/p/thumb/ABhQBBnb0FYdyZQfqmzfiyOXd7pcIKkMq6-f9NAsLBLKMn4UYuJ7d4mm-tvx0H_lz0c23cNXXGk4XQ7d_4-dpE11GGTuIwiKJkW_XJhhTbf9K2IBGR7gSl8qNTA7SXi0Nz5VThr6dtZQKOE0hv4DaX3Htn0yfeWmssjpfqXdspDdOK21KFwPQBun7NhvEUr2EVY6FV4vtk8vswA45MCbpyzvlo24piWkNcfPDqraAhyRpFlolo3t2X1vZGJzVyamPo1u7M0HPqHAYDrtuvLDa4UQ9EgLL-ioNDyM7q8TwL6I5AclpBNbep2NI4wfafkiOuBD5Qw7o1bqkWlzAlJS9U79b3h9ymWGRP8TchEgWRS7etCkdZARobKcyxlg8uZisC4/p.png"
    } else if (hrFinal == 10 || hrFinal == 22) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras comem pastéis`
        img.src = "https://previews.dropbox.com/p/thumb/ABi6vzfdDwqDIGjcwCY3LP9KxZxB5_dL2BSpWCc34lIXvYuspIJBE1-BSsnAJ7ckLMSXSIzgfsuqCYYdx9x11wO64VmgZGACOXMsKSSkK-tFukk3LPjnq-Yu540Cat30D5jdRU11cBT_lK_6D2d_pQRtjuPwlh97xyaE0m6BlTYwifA2qVB6cDClDSUo05iTAX6yldyRYsMBDALBfBBJYoCYq6CApZLWoZTkeyjjhPbXu0ZPVxsPBJUff5szSDjbgn1xEx621Qq0_93HyTtbdL9NXwPlgVr7V4YTEZO6CdW82Z1f5NauvU7UktvRpSAt8HgvEI26iH7_Q_6ikahukjCxio38DUmOIs0BHuOjWjHpbf6vMPaSqPtE9M3FZ7urqoY/p.png"
    } else if (hrFinal == 11 || hrFinal == 23) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras sobem no bonde`
        img.src = "https://previews.dropbox.com/p/thumb/ABiZWI5smq4JDCM0Vzkdn9lh9XhyxiweqEXyNynNHiigVG83YjMSst6_xvh1tBkixpIdEdriho3ggG--FzmlhCv6103n9kTunbMKG8IFwx7QPbni0Uki8BvzH8xTVxJ0EKDADrqUIIPnGZ5NcULBA7xEZ9N6WQ9WARnLyqsd_cZ43nDcqyU9d8t1tWK6YYRFyhI2HuOVYkJ4CyfbIbqxKutzLFsskbYlzc7o7AcL-NaXdEmGe1lTo3S7w5rCMtkt9AG0N75zUYWHTd9YPaT0b4Vikr_MazmUpRQgG_21n33F2r75n_uLGUa5u5han9ceDQjbEKCvV4ToU64WMCfdcItBd7pDHgneneZvfPjuzmH-7k-zMqElf2deQ3UW198GeSU/p.png"
    } else if (hrFinal == 12 || hrFinal == 24) {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras fazem pose`
        img.src = "https://previews.dropbox.com/p/thumb/ABi1A1Y1xpq4PyT3A8BfSHLgDCI352VNtVObf-nhFLFtadj-KNTrZVm5zUgveLInBAIrUMJamg21c7iJMxBFOmvLn-2TTm54sA1IpuYtkDJLgmLaQb8RD4GvTbijZdA7vH7kTSbQKeWLz7bYR04qH9YaMyAK0bKafAZG1V4X0QjE_xlEUkxapGW2fXgkawgB73PBOW91lhxrrbEBCGmt8tC0lUGEsUamHwhk-9KVoz7X0rbFkqH29uTVEtTqLuXSA20vXC54p_lBUGUQ-dxWqt521zUjaDOCMaEpe7rpGO6yxb2v3CEB8VtYZHCYC9i0Ar7axGWFCzUrdu31O7g96sj7bTCyPMW5wqZaL48_forMukXYY3Tku_eGTfpluPgrH0w/p.png"
    } else {
        res1.innerHTML = `Quando o relógio bate às ${hrFinal}`
        res2.innerHTML = `Todas as caveiras`
        img.src = ""
    }
}
